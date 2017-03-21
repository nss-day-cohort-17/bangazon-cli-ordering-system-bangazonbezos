'use strict'

const prompt = require('prompt')
const { getPaymentOptions, getPaymentId } = require('./queryDB')
const { createPaymentOption } = require('./writeDB')
const { updatePaidInFull, updateOrderPayment } = require('./updateDB')
const { updateCurrentObj } = require('./currentObj.js')
const { getCurrentObj } = require('./currentObj.js')
let x = getCurrentObj();
module.exports.checkForStoredPayment = ()=>{

	getPaymentOptions()
	  .then(payments => {
	  	if (payments) {
	  		module.exports.storedPayment(payments)
	  	} else {
	  		module.exports.createPayment()
	  	}
	 })
};

module.exports.storedPayment = (payments)=>{
  // let paymentList = payments
  let paymentList = payments

	console.log('Choose as payment option')
	for (let i = 0; i < paymentList.length; i++) {
		console.log((i + 1) + '. ' + paymentList[i].name)
	}
	console.log('n. Create New Payment Option')

  prompt.message = ''
  prompt.delimiter = `>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	paymentOptionNumber:{
	    		description: ' '
	    	}
	    }
	  }, function (err, result) {
	  	let arg = result.paymentOptionNumber
	    if (arg <= paymentList.length && arg > 0) {
	    	let paymentPicked = paymentList[arg - 1]
	    	updateCurrentObj('paymentnickname', paymentPicked.name)
	    	updateCurrentObj('paymentaccountnumber', paymentPicked.accountnumber)
	    	updateCurrentObj('paymentid', paymentPicked.paymentid)
	    	updatePaidInFull()
	    	  .then(() => {
	    	  	promptToConfirm()
	    	  })
		  } else if (arg === 'n') {
		  	module.exports.createPayment()
		  } else {
		  	console.log('Please provide a valid entry!')
		  	setTimeout(function() { module.exports.storedPayment(paymentList) }, 1500 )
		  }
  });
  return '1';
};

module.exports.createPayment = (arg)=>{
  // if(arg.length === 0 ){throw new Error ('Please enter valid entry');};
  console.log('Create New Payment')
  prompt.message = ''
  prompt.delimiter = `
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	nickname:{
	    		description: 'Enter payment name'
	    	},
	    	accountNumber: {
	    		description: 'Enter account number'
	    	}
	    }
	  }, function (err, result) {
	  	console.log(`Name: ${result.nickname}
Account Number: ${result.accountNumber}`)
	  	  prompt.message = ''
		  prompt.delimiter = `
>`;
		  prompt.start();
			  prompt.get({
			    properties: {
			    	confirm: {
			    		description: 'Look OK? (y/n)'
			    	}
			    }
			  }, function (err, answer) {
			  	if (answer.confirm === 'y') {
			  		updateCurrentObj('paymentnickname', result.nickname)
	    			updateCurrentObj('paymentaccountnumber', result.accountNumber)
				  	createPaymentOption(result)
				  	  .then(() => {
				  	  	getPaymentId()
				  	  	  .then(id => {
				  	  	  	console.log(id[0].paymentid)
				  	  	  	updateCurrentObj('paymentid', id[0].paymentid)
				  	  	  	console.log(getCurrentObj())
				  	  	  	updateOrderPayment()
				  	  	  	  .then(() => {
				  	  	  	  	console.log('Updated payment')
				  	  	  	  	promptToConfirm()
				  	  	  	  })
				  	  	  })
				  	  })
				  	} else {
				  		module.exports.createPayment()
				  	}
		  });
  });

  return '1';
};

const promptToConfirm = () => {

  prompt.message = ''
  prompt.delimiter = `
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	confirm:{
	    		description: 'Payment Option Look Good? (y/n)'
	    	}
	    }
	  }, function (err, answer) {
	  	if (answer.confirm === 'y') {
	  		promptToPlaceOrder()
	  	} else {
	  		const { displayMainMenu } = require('./mainmenu.js')
	  		displayMainMenu()
	  	}
	})
}

const promptToPlaceOrder = () => {
  prompt.message = ''
  prompt.delimiter = `
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	confirm:{
	    		description: 'Place Order? (y/n)'
	    	}
	    }
	  }, function (err, answer) {
	  	if (answer.confirm === 'y') {
    	  	const { displayMainMenu } = require('./mainmenu.js')
    	  	console.log('Order Completed!')
    	  	setTimeout(function() {
    	  		displayMainMenu()
    	  	}, 1500)
	  	} else {
	  		const { displayMainMenu } = require('./mainmenu.js')
	  		displayMainMenu()
	  	}
	})
}
