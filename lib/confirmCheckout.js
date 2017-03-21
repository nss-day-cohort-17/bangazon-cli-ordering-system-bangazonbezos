'use strict'

const prompt = require('prompt');


module.exports.confirmCheckout = ()=>{
  // console.log('proceed to checkout')
  const {getCurrentObj} = require('./currentObj');
  let {customerPath} = getCurrentObj();
  console.log(customerPath);
  const {getOrderTotal} = require('./queryDB.js')
  getOrderTotal()
  .then((val)=>{
    console.log(`Your total is $ ${val}`)
    prompt.message = ''
    prompt.delimiter = `
  >`;

    prompt.start();
      prompt.get({
        properties: {
          confirm:{
            description: 'Ready to purchase? (y/n)'
          }
        }
      }, function (err, result) {
        let arg = result.confirm
        if(arg.toLowerCase() === 'y' && customerPath === 'addProducts') {
          console.log(`1. Create new Customer
2. Choose Active Customer`)
          prompt.message = ''
          prompt.delimiter = `
        >`;

          prompt.start();
            prompt.get({
              properties: {
                customerType:{
                  description: 'Select Option: '
                }
              }
            }, function (err, result) {
              let arg = result.customerType
              if(arg === "1") {
                const {createCustomer} = require('./createCustomer');
                addProducts();
              } else if (arg === "2") {
                const {activeCustomers} = require('./activeCustomers');
                activeCustomers();
              } else {
                console.log('Please provide a valid entry!')
                setTimeout(function() { module.exports.confirmCheckout() }, 1500 )
              }
            })
        } else if(arg.toLowerCase() === `y`) {
          const {checkForStoredPayment} = require('./paymentOptions.js');
          checkForStoredPayment();
        } else if (arg.toLowerCase() === 'n') {
          const { confirmCart } = require('./confirmCart.js')
          confirmCart()
          console.log('return to cart review')
        }  else {
          console.log('Please provide a valid entry!')
          setTimeout(function() { module.exports.confirmCheckout() }, 1500 )
        }
      });
   })

};
