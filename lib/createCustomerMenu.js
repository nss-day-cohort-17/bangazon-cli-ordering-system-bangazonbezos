'use strict'

const prompt = require('prompt')
const { updateCurrentObj, getCurrentObj } = require('./currentObj')
const { createCustomer } = require('./createCustomer.js')

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
	    	updateCurrentObj('firstname', result.name.split(' ')[0])
	    	updateCurrentObj('lastname', result.name.split(' ')[1])
	    	updateCurrentObj('customerPath', 'createCustomer')
	    	console.log(getCurrentObj())
	    	// createCustomer will be a promise*****************************
	     	answer.confirm === 'y' ? createCustomer(result) : module.exports.createCustomerMenu()
	    });

  });
}
