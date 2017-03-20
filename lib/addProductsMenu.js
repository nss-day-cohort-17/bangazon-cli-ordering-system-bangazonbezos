'use strict'

const prompt = require('prompt')
const { updateCurrentObj } = require('./currentObj.js')
const { quantity } = require('./addProducts.js')

// circular dependency (maybe try duplicate module)
const { displayMainMenu } = require('./choices.js') 

module.exports.addProductsMenu = () => {
		// test products (real will be from query)
	let productList = ['Bike', 'Dog Food', 'Lamp', 'Grill']

	// display product list (will be object)
	console.log('Product List:')
	for (let i = 0; i < productList.length; i++) {
		console.log((i + 1) + '. ' + productList[i])
	}
	console.log(`d. view cart 
b. main menu`)

  prompt.message = ''
  prompt.delimiter = ` 
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	productNumber:{
	    		description: 'Select Product'
	    	} 
	    }
	  }, function (err, result) {
	  	let arg = result.productNumber
	    if (arg <= productList.length && arg > 0) {
	    	let productPicked = productList[arg - 1]
	    	updateCurrentObj('productname', productPicked)
	    	updateCurrentObj('customerPath', 'activeCustomers')
	    	quantity(productPicked)
		  } else if (arg.toLowerCase() === 'd') {
		  	// VIEW CART
		  	console.log('view cart')
		  } else if (arg.toLowerCase() === 'b') {
		  	displayMainMenu()
		  } else {	
		  	console.log('Please provide a valid entry!')
		  	setTimeout(function() { module.exports.activeCustomers() }, 1500 ) 
		  }
  });
}
