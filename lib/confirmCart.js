'use strict'


const {getCurrentObj} = require('./currentObj.js');
// const {updateOrderLine} = require('./updateDB');
const {getOrderLines} = require('./queryDB.js');
const prompt = require('prompt');

module.exports.confirmCart = ()=>{
  // if(arg.length===0) {throw new ReferenceError ("please select a valid entry")}
  let {orderid} = getCurrentObj();
  // test orderLines (real will be from query)
    //let orderLineList = getOrderLines(orderId)
  // let orderLineList = [{lineitemid: 3, productid: 7, productName: "6 foot step ladder", quanity:7}, {lineitemid: 8, productid: 2, productName: "tesla model s", quanity: 6}]
  getOrderLines()
  .then((data)=>{
    let orderLineList = data;
    console.log('Cart Contents: ')
    for (let i = 0; i < orderLineList.length; i++) {
      console.log(' ' + orderLineList[i].productname + " x " + orderLineList[i].quanity);
      }
    console.log(`e. edit order
  d. return to shopping
  b. main menu (cancels order)`)

    prompt.message = ''
    prompt.delimiter = `
  >`;

    prompt.start();
      prompt.get({
        properties: {
          response:{
            description: 'Enter Response'
          }
        }
      }, function (err, result) {
        let arg = result.response
        if (arg.toLowerCase() === 'e') {
          const { editCart } = require('./editCart.js')
          editCart()
          console.log('go to edit')
        } else if (arg.toLowerCase() === 'd') {
          // return to adding products
          const { addProducts } = require('./addProducts.js')
          addProducts();
          console.log('return to shopping')
        } else if (arg.toLowerCase() === 'b') {
          const { displayMainMenu } = require('./mainmenu.js')
          displayMainMenu()
        } else {
          console.log('Please provide a valid entry!')
          setTimeout(function() { module.exports.editCart() }, 1500 )
        }
    });

  })
  return '1';
};

// module.exports.confirmCart()
