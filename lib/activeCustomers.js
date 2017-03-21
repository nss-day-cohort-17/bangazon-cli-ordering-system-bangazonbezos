'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')
const prompt = require('prompt')
const { addProducts } = require('./addProducts.js')
const { getActiveCustomers } = require('./queryDB.js')
const {checkForStoredPayment} = require('./paymentOptions');

let {customerPath } = getCurrentObj();
module.exports.activeCustomers = ()=>{
	// test customers (real will be from query)
	let customerList;

	// display customer list
	getActiveCustomers()
	  .then((data) => {
	  	customerList = data
		console.log('Which customer will be active?')
		for (let i = 0; i < customerList.length; i++) {
			console.log((i + 1) + '. ' + customerList[i].firstname + ' ' + customerList[i].lastname)
	  }


  prompt.message = ''
  prompt.delimiter = `
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	customerNumber:{
	    		description: 'Select Customer'
	    	}
	    }
	  }, function (err, result) {
	  	let arg = result.customerNumber
	  	if(arg <= customerList.length && arg > 0 && customerPath === 'addProducts') {
        let customerPicked = customerList[arg - 1]
	    	updateCurrentObj('firstname', customerPicked.firstname)
	    	updateCurrentObj('lastname', customerPicked.lastname)
	    	updateCurrentObj('customerid', customerPicked.customerid)
	    	// updateCurrentObj('customerPath', 'activeCustomers')
	    	const {updateCustomerId} = require('./updateDB');
	    	updateCustomerId()
	    	checkForStoredPayment()
        }
       else if(arg <= customerList.length && arg > 0 && customerPath === 'paymentOptions') {
        let customerPicked = customerList[arg - 1]
	    	updateCurrentObj('firstname', customerPicked.firstname)
	    	updateCurrentObj('lastname', customerPicked.lastname)
	    	updateCurrentObj('customerid', customerPicked.customerid)
	    	// updateCurrentObj('customerPath', 'activeCustomers')
	    	const {updateCustomerIdPayment} = require('./updateDB');
	    	updateCustomerIdPayment()
	    	addProducts()
        }
	    else if (arg <= customerList.length && arg > 0) {
	    	let customerPicked = customerList[arg - 1]
	    	updateCurrentObj('firstname', customerPicked.firstname)
	    	updateCurrentObj('lastname', customerPicked.lastname)
	    	updateCurrentObj('customerid', customerPicked.customerid)
	    	// updateCurrentObj('customerPath', 'activeCustomers')
	    	addProducts()
		  } else {
		  	console.log('Please provide a valid entry!')
		  	setTimeout(function() { module.exports.activeCustomers() }, 1500 )
		  }
  	});
  });
};
