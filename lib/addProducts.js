'use strict'

//display whats going on
//get user prompts
const prompt = require('prompt');
const { updateCurrentObj, getCurrentObj } = require('./currentObj.js')
const { createOrder, createOrderLine } = require('./writeDB')
const { getProducts, getOrderId } = require('./queryDB.js')
const currentObj = getCurrentObj()
let productList;

// LIST AND PROMPT

module.exports.addProducts = ()=>{

	if (currentObj.orderid == '') {
		createOrder()
		  .then(() => {
		  	getOrderId()
		  	  .then(id => {
			  	updateCurrentObj('orderid', id)
		  	  })
	 		})
	}

    updateCurrentObj('productname', '')
	updateCurrentObj('productid', '')
	updateCurrentObj('quantity', '')

		// test products (real will be from query)
	let productList;
	getProducts()
	  .then((data) => {
			 productList = data
			console.log('Product List:')
			for (let i = 0; i < productList.length; i++) {
				console.log((i + 1) + '. ' + productList[i].name)
			}
			console.log(`d. view cart
b. main menu`)
	  })

	// display product list (will be object)

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
	    	updateCurrentObj('productname', productPicked.name)
	    	updateCurrentObj('productid', productPicked.productid)
	    	updateCurrentObj('customerPath', 'activeCustomers')
	    	module.exports.quantity(productPicked.name)
		  } else if (arg.toLowerCase() === 'd') {
		  	const { confirmCart } = require('./confirmCart.js')
        confirmCart()
		  	console.log('view cart')
		  } else if (arg.toLowerCase() === 'b') {
		  	const { displayMainMenu } = require('./mainmenu.js')
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
	  	updateCurrentObj('quantity', quantity)
	  	module.exports.confirmProduct(arg + ' x ' + quantity)
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
	  	if (confirm.toLowerCase() === 'y') {
	  		createOrderLine()
	  		  .then(() => {
				module.exports.addProducts()
	  		  })
	  	} else if (confirm.toLowerCase() === 'n'){
	  		module.exports.addProducts()
	  	} else {
        console.log('Please provide a valid entry!')
        setTimeout(function() { module.exports.confirmProduct(arg) }, 1500 )
      }
  });

  return 'y';
};
