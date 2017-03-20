'use strict';

module.exports.userChoices = (arg)=>{
  if(arg.length === 0 ){throw new Error ("There is no valid entry")};
  return {};
};

module.exports.displayMainMenu = () => {
	  console.log(` *********************************************************
 **  Welcome to Bangazon! Command Line Ordering System  **
 *********************************************************`)
	console.log('1. Create a customer account')
	console.log('2. Choose active customer')
	console.log('3. Create a payment option')
	console.log('4. Add product to shopping cart')
	console.log('5. Complete an order')
	console.log('6. See product popularity')
	console.log('7. Leave Bangazon!')
}
