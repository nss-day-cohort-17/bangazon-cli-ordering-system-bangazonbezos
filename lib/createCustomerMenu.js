'use strict'

const prompt = require('prompt')
const { updateCurrentObj, getCurrentObj } = require('./currentObj')
const { createCustomer } = require('./writeDB.js')
const { getCustomerId } = require('./queryDB.js')
const { addProducts } = require('./addProducts.js')

let {customerPath} = getCurrentObj();

module.exports.createCustomerMenu = () => {
  prompt.message = ''
  prompt.delimiter = `
>`;
  prompt.start();

	let createCustomerForm = {
	      name: {
	        description: 'Enter Customer name (1/6)'
	      },
	      address: {
	        description: 'Enter street address (2/6)'
	      },
	      city: {
	        description: 'Enter city (3/6)'
	      },
	      state: {
	        description: 'Enter state (4/6)'
	      },
	      postal_code: {
	        description: 'Enter postal code (5/6)'
	      },
	      phone_number: {
	        description: 'Enter phone number (6/6)'
	      }
	}

	  prompt.get({
	    properties: createCustomerForm
	  }, function (err, result) {
	    console.log('  name: ' + result.name);
	    console.log('  address: ' + result.address);
	    console.log('  city: ' + result.city);
	    console.log('  state: ' + result.state);
	    console.log('  postal code: ' + result.postal_code);
	    console.log('  phone number: ' + result.phone_number);

	    prompt.start();
	      prompt.get({
	      properties: {
	        confirm: {
	          description: 'Look Ok? (y/n)'
	        }
	      }
	    }, function (err, answer) {
	    	let firstname = result.name.split(' ')[0]
	    	let lastname = result.name.split(' ')[1]
	    	updateCurrentObj('firstname', firstname)
	    	updateCurrentObj('lastname', lastname)
	    	updateCurrentObj('customerPath', 'createCustomer')
	    	if (answer.confirm === 'y' && customerPath === 'addProducts') {
	    		createCustomer(result)
	    		  .then(() => {
	    		  	getCustomerId(firstname, lastname)
	    		  	  .then((id) => {
	    		  	  	updateCurrentObj('customerid', id);
	    		  	  	const {updateCustomerId} = require('./updateDB');
	    						updateCustomerId();
	    		  			const {checkForStoredPayment} = require('./paymentOptions');
	    		  			checkForStoredPayment();
	    		  	  })
	    		  })
	    	} else if (answer.confirm === 'y' && customerPath === 'paymentOptions') {
	    		createCustomer(result)
	    		  .then(() => {
	    		  	getCustomerId(firstname, lastname)
	    		  	  .then((id) => {
	    		  	  	updateCurrentObj('customerid', id);
	    		  	  	const {updateCustomerIdPayment} = require('./updateDB');
	    						updateCustomerIdPayment();
	    						addProducts();
	    		  	  })
	    		  })
	    	} else if (answer.confirm === 'y') {
	    		createCustomer(result)
	    		  .then(() => {
	    		  	getCustomerId(firstname, lastname)
	    		  	  .then((id) => {
	    		  	  	updateCurrentObj('customerid', id)
	    		  		addProducts()
	    		  	  })
	    		  })
	    	} else {
	    		module.exports.createCustomerMenu()
	    	}
	    });

  });
}
