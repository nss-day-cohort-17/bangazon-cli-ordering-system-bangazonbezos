'use strict'

const prompt = require('prompt');


module.exports.confirmCheckout = ()=>{
  // console.log('proceed to checkout')
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
        if(arg.toLowerCase() === `y`) {
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
