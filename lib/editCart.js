'use strict'

const {getCurrentObj, updateCurrentObj} = require('./currentObj.js');
const {updateOrderLine} = require('./updateDB');
const prompt = require('prompt');

let orderLines;

module.exports.editCart = ()=>{
  let {orderid} = getCurrentObj();
  // test orderLines (real will be from query)
    //let orderLineList = getOrderLines(orderId)
  //let orderLineList = [{lineitemid: 3, productid: 7, productName: "6 foot step ladder", quanity:7}, {lineitemid: 8, productid: 2, productName: "tesla model s", quanity: 6}]

  const {getOrderLines} = require('./queryDB.js');

  getOrderLines()
  .then((data)=>{
    let orderLineList = data;
    console.log('Cart Contents: ')
    for (let i = 0; i < orderLineList.length; i++) {
      console.log((i + 1) + '. ' + orderLineList[i].productname + " x " + orderLineList[i].quanity);
      }
    console.log(`d. return to shopping,
  b. main menu`)

    prompt.message = ''
    prompt.delimiter = `
  >`;

    prompt.start();
      prompt.get({
        properties: {
          orderLineNumber:{
            description: 'Select Line to Edit'
          }
        }
      }, function (err, result) {
        let arg = result.orderLineNumber
        if (arg <= orderLineList.length && arg > 0) {
          let productPicked = orderLineList[arg - 1]
          updateCurrentObj('currentProduct.productname', productPicked.productName);
          updateCurrentObj('currentProduct.productid', productPicked.productid);
          updateCurrentObj('currentProduct.quanity', productPicked.quanity);
          module.exports.quantity(productPicked)
        } else if (arg.toLowerCase() === 'd') {
          // VIEW CART
          const { addProducts } = require('./addProducts.js')
          addProducts();
        } else if (arg.toLowerCase() === 'b') {
          displayMainMenu()
        } else {
          console.log('Please provide a valid entry!')
          setTimeout(function() { module.exports.editCart() }, 1500 )
        }
    });
  });
  return '1';
};


// ********* QUANTITY UPDATE

module.exports.quantity = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter quantity')};
  let productToEdit = arg;
  // log curent product name
  console.log(productToEdit.productname)

  prompt.message = ''
  prompt.delimiter = `
>`;

  prompt.start();
    prompt.get({
      properties: {
        productQuantity:{
          description: 'Update Product Quantity (if removing item put zero)'
        }
      }
    }, function (err, result) {
      let quantity = result.productQuantity
      updateCurrentObj('currentProduct.quanity', quantity)
      //pass in current object
      module.exports.confirmEdit(productToEdit, quantity)
  });
  return '1';
};

// ********* CONFIRM

module.exports.confirmEdit = (arg, qunt)=>{
  if(qunt.length === 0) {throw new ReferenceError ('Please enter quantity')};
  let productToEdit = arg;
  productToEdit.quanity = qunt;
  // log curent product name
  console.log(`Update order to ${productToEdit.productname} x ${qunt}`)

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
      let { confirm } = result;
      let {lineitemid, quanity} = productToEdit;
      if(confirm === 'y') {
        updateOrderLine(lineitemid, qunt)
        .then(()=>{
          console.log(`Order updated to ${productToEdit.productname} x ${qunt}`)
          // back to products
          module.exports.editCart()

        });
      }
  });
  return 'y';
};

// module.exports.editCart()
