'use strict'

const prompt = require('prompt')
const { getPaymentOptions } = require('./queryDB')
const { createPaymentOption } = require('./writeDB')

module.exports.checkForStoredPayment = ()=>{
	getPaymentOptions()
	  .then(payments => {
	  	if (payments) {
	  		module.exports.storedPayment(payments)
	  	} else {
	  		createPayment()
	  	}
	 })
};
module.exports.storedPayment = (payments)=>{
  // let paymentList = payments
  let paymentList = ['AMEX', 'Mastercard', 'Visa']

	console.log('Choose as payment option')
	for (let i = 0; i < paymentList.length; i++) {
		console.log((i + 1) + '. ' + paymentList[i])
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
	    	console.log(paymentPicked)
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
  if(arg.length === 0 ){throw new Error ('Please enter valid entry');};
  return '1';
};

module.exports.storedPayment()
