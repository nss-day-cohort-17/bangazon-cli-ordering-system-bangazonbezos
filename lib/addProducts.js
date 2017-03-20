'use strict'

//display whats going on
//get user prompts
const prompt = require('prompt');
const { displayMainMenu } = require('./choices.js') 
const { updateCurrentObj } = require('./currentObj.js')

// LIST AND PROMPT

module.exports.addProducts = ()=>{
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
	    	module.exports.quantity(productPicked)
		  } else if (arg.toLowerCase() === 'd') {
		  	// VIEW CART
		  	console.log('view cart')
		  } else if (arg.toLowerCase() === 'b') {
		  	displayMainMenu()
		  } else {	
		  	console.log('Please provide a valid entry!')
		  	setTimeout(function() { module.exports.addProducts() }, 1500 ) 
		  }
  });
  return '1';
};

// ********* QUANTITY CHECK

module.exports.quantity = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter quantity')};

  // log curent product name
  console.log(arg)

  prompt.message = ''
  prompt.delimiter = ` 
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	productQuantity:{
	    		description: 'Select Quantity'
	    	} 
	    }
	  }, function (err, result) {
	  	let quantity = result.productQuantity	
	  	module.exports.confirmProduct(arg + ' x' + quantity)
  });
  return '1';
};


// ********* CONFIRM

module.exports.confirmProduct = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter quantity')};

  // log curent product name
  console.log(arg)

  prompt.message = ''
  prompt.delimiter = ` 
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	confirm:{
	    		description: 'Look OK? (y/n)'
	    	} 
	    }
	  }, function (err, result) {
	  	let { confirm } = result
	  	console.log(arg + ' x' + quantity)
	  	// back to products
	  	module.exports.addProducts()
  }); 
  return 'y';
};
