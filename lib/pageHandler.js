'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')
const { productPopularity } = require('./productPopularity.js')
const { createCustomerMenu } = require('./createCustomerMenu.js')
const { activeCustomers } = require('./activeCustomers.js')
const currentObj = getCurrentObj()

module.exports.pageHandler = (arg)=>{
  if(arg.length === 0 ){throw new Error ("There is no valid entry")};
  	switch (arg) {
	  case '1':
	  	// Show Create Customer Screen
		createCustomerMenu()
		break
	  case '2':
		// Show Select Existing Customer Screen
		activeCustomers()
		break
	  case '3':
		// getCurrentObj().customerid ? 
		break
	  case '4':
		console.log(arg)
		break
	  case '5':
		console.log(arg)
		break
	  case '6':
		console.log(arg)
		break
	  case '7':
	  	productPopularity()
	  	break
	}
  return {};
};
