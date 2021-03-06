'use strict'

const {getCurrentObj, updateCurrentObj} = require('./currentObj.js');
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('banagzon.sqlite');

// let currentObj = getCurrentObj();

module.exports.createCustomer = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter all required fields')};
  let newCustomer = arg;
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO customers VALUES(null, "${newCustomer.name.split(' ')[0]}", "${newCustomer.name.split(' ')[1]}", "${newCustomer.address}", "${newCustomer.city}", "${newCustomer.state}", "${newCustomer.postal_code}", "${newCustomer.phone_number}")`, (err, data)=>{
      if(err){
        console.log(err);
      }
      resolve(data)
    })
  })
};
module.exports.createOrder = ()=>{
  // if(arg.length === 0) {throw new ReferenceError ('Please login')};
  //get current Objc
  let currentObj = getCurrentObj();
  //store the current date in a var
  let orderDate = Date.now();
  //write that date to the currentObjc as current order date
  updateCurrentObj("orderDate", orderDate);
  //create a new order in the DB
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO orders VALUES(null, ${currentObj.customerid}, 0, 0, "${orderDate}")`, (err, data)=>{
      if(err) {
        console.log(err);
      }
      resolve(data)
    })
  })
};
// module.exports.createOrderLine({productid: 3, quantity: 8 });
module.exports.createOrderLine = (arg)=>{
  // if(arg.length === 0) {throw new ReferenceError (ReferenceError)};
    //get current Obj
  let currentObj = getCurrentObj();
  let newOrderLine = arg;
  return new Promise((resolve, reject) => {
     db.run(`INSERT INTO order_line_items VALUES(null, ${currentObj.orderid}, ${currentObj.productid}, ${currentObj.quantity})`, (err, data)=>{
      if(err){
        console.log(err);
      }
      resolve(data)
    })
  })
};
//module.exports.createPaymentOption({name: "MasterCard", accountnumber: "87463524" });
module.exports.createPaymentOption = (arg)=>{
  // if(arg.length === 0) {throw new ReferenceError (ReferenceError)};
  //get current Objc
  let currentObj = getCurrentObj();
  let newPaymentOption = arg;
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO payment_options VALUES(null, "${newPaymentOption.nickname}", "${newPaymentOption.accountNumber}", ${currentObj.customerid})`, (err, data)=>{
      if(err){
        console.log(err);
      }
      resolve(data)
    });
  })
};


// let newCustomer = {
//   firstname: "John",
//   lastname: "Lennon",
//   address: "123 London Way",
//   city: "Liverpool",
//   state: "New York",
//   postalcode: "54332",
//   phonenumber: "555-321-9876"
// }

// module.exports.createCustomer(newCustomer);
