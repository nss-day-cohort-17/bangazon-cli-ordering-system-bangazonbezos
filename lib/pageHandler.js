'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')
const currentObj = getCurrentObj()

module.exports.pageHandler = (arg)=>{
  if(arg.length === 0 ){throw new Error ("There is no valid entry")};
  	switch (arg) {
	  case '1':
	  	updateCurrentObj("customerPath", "createCustomer");
	  	const { createCustomerMenu } = require('./createCustomerMenu.js')
		createCustomerMenu()
		break
	  case '2':
	  	updateCurrentObj("customerPath", "activeCustomers");
			const { activeCustomers } = require('./activeCustomers.js')
			activeCustomers()
		break
	  case '3':
	  	updateCurrentObj("customerPath", "paymentOptions");
	  	const { checkForStoredPayment } = require('./paymentOptions.js')
	  	checkForStoredPayment()
		break
	  case '4':
	  	updateCurrentObj("customerPath", "addProducts");
	  	const { addProducts } = require('./addProducts.js')
	  	addProducts()
		break
	  case '5':

	  	const { completeOrder } = require('./completeOrder.js');
	  	completeOrder()

	  	// console.log(arg)
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
