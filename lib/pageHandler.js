'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')
const currentObj = getCurrentObj()

module.exports.pageHandler = (arg)=>{
  if(arg.length === 0 ){throw new Error ("There is no valid entry")};
  	switch (arg) {
	  case '1':
	  	// Show Create Customer Screen
	  	const { createCustomerMenu } = require('./createCustomerMenu.js')
		createCustomerMenu()
		break
	  case '2':
		// Show Select Existing Customer Screen
		const { activeCustomers } = require('./activeCustomers.js')
		activeCustomers()
		break
	  case '3':
	  	const { storedPayment } = require('./paymentOptions')
	  		storedPayment()
		break
	  case '4':
	  	const { addProducts } = require('./addProducts.js')
	  	addProducts()
		break
	  case '5':
		console.log(arg)
		break
	  case '6':
		console.log(arg)
		break
	  case '7':
	  	const { productPopularity } = require('./productPopularity.js')
	  	productPopularity()
	  	break
	}
  return {};
};
