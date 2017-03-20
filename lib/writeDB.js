'use strict'

let {getCurrentObj, updateCurrentObj} = require('./currentObj.js');
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('banagzon.sqlite');

let currentObj = getCurrentObj();

module.exports.createCustomer = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter all required fields')};
  let newCustomer = arg;
};
module.exports.createOrder = ()=>{
  // if(arg.length === 0) {throw new ReferenceError ('Please login')};
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
module.exports.createOrderLine = ()=>{
  if(arg.length === 0) {throw new ReferenceError (ReferenceError)};
};
module.exports.createPaymentOption = ()=>{
  if(arg.length === 0) {throw new ReferenceError (ReferenceError)};
};


module.exports.createOrder();
