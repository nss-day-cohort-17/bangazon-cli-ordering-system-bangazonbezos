'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')
const currentObj = getCurrentObj()

module.exports.pageHandler = (arg)=>{
  if(arg.length === 0 ){throw new Error ("There is no valid entry")};
  	switch (arg) {
	  case '1':
	  	const { createCustomerMenu } = require('./createCustomerMenu.js')
		createCustomerMenu()
		break
	  case '2':
		const { activeCustomers } = require('./activeCustomers.js')
		activeCustomers()
		break
	  case '3':
	  	const { checkForStoredPayment } = require('./paymentOptions.js')
	  	checkForStoredPayment()
		break
	  case '4':
	  	const { addProducts } = require('./addProducts.js')
	  	addProducts()
		break
	  case '5':

	  	console.log(arg)
		break
	  case '6':
	  	const { productPopularity } = require('./productPopularity.js')
	  	productPopularity()
		break
	  case '7':
	  	console.log('Goodbye!')
	  	break
	}
  return {};
};
