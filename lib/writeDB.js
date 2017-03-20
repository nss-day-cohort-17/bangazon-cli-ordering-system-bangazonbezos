'use strict'

let {getCurrentObj, updateCurrentObj} = require('./currentObj.js');
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('banagzon.sqlite');

// let currentObj = getCurrentObj();

module.exports.createCustomer = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter all required fields')};
  let newCustomer = arg;
};
module.exports.createOrder = ()=>{
  // if(arg.length === 0) {throw new ReferenceError ('Please login')};
  //get current Objc
  let currentObj = getCurrentObj();
  //store the current date in a var
  let orderDate =Date.now();
  //write that date to the currentObjc as current order date
  updateCurrentObj("orderDate", orderDate);
  //create a new order in the DB
  db.run(`INSERT INTO orders VALUES(null, ${currentObj.customerid}, 0, 0, "${orderDate}")`, (err, data)=>{
    if(err) {
      console.log(err);
    }
  })


};
module.exports.createOrderLine = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError (ReferenceError)};
    //get current Objc
  let currentObj = getCurrentObj();
  let newOrderLine = arg;
  db.run(`INSERT INTO order_line_items VALUES(null, ${currentObj.orderid}, ${newOrderLine.productid}, ${newOrderLine.quantity})`, (err, data)=>{
    if(err){
      console.log(err);
    }
  })

};
module.exports.createPaymentOption = ()=>{
  if(arg.length === 0) {throw new ReferenceError (ReferenceError)};
};


module.exports.createOrderLine({productid: 3, quantity: 8 });
