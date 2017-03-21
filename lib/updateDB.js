'use strict'


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./banagzon.sqlite');
const {getCurrentObj} = require('./currentObj');

module.exports.updateOrderLine = (args, quant)=>{

  return new Promise((resolve, reject)=> {

  //passes in arguments of orderlineid, and updated quanity
    if(args.length === 0) {throw new Error(Error)};
      let {currentProduct} = getCurrentObj();
    db.run(`UPDATE order_line_items SET quanity=${quant} WHERE lineitemid=${args}`, (err, data)=>{
      if(err){
        console.log(err);
      }
      resolve(data);
    })
  })
};

module.exports.updateOrderPayment = ()=>{

  return new Promise((resolve, reject) => {
    let {orderid, paymentid} = getCurrentObj();
    db.run(`UPDATE orders SET paymentid = ${paymentid} WHERE orderid = ${orderid}`, (err, data)=>{
      resolve(data)
    });
  })
};

<<<<<<< HEAD
module.exports.updateCustomerId = ()=>{
  let {customerid, orderid} = getCurrentObj();
  // console.log(orderid);
  db.run(`UPDATE orders SET customerid = ${customerid} WHERE orderid = ${orderid}`, (err, data)=>{
    if(err){
      console.log(err);
    }

  })
};

module.exports.updateCustomerIdPayment = ()=>{
  let {customerid, paymentid} = getCurrentObj();
  // console.log(orderid);
  db.run(`UPDATE payment_options SET customerid = ${customerid} WHERE paymentid = ${paymentid}`, (err, data)=>{
    if(err){
      console.log(err);
    }

  })
};


// module.exports.updateOrderLine(5, 17)
=======
module.exports.updatePaidInFull = ()=>{
  let {orderid, paymentid} = getCurrentObj();
  return new Promise((resolve, reject) => {
    db.run(`UPDATE orders SET paidinfull = 1 WHERE orderid = ${orderid}`, (err, data)=>{
      if(err){
        console.log(err);
      }
      resolve(data)
      reject(err)
    })
  })
};
>>>>>>> master
