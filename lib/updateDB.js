'use strict'


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./banagzon.sqlite');
const {getCurrentObj} = require('./currentObj');

module.exports.updateOrderLine = (args, quant)=>{
  //passes in arguments of orderlineid, and updated quanity
  if(args.length === 0) {throw new Error(Error)};
    let {currentProduct} = getCurrentObj();
  db.run(`UPDATE order_line_items SET quanity=${quant} WHERE lineitemid=${args}`, (err,data)=>{
    if(err){
      console.log(err);
    }
  })
};
module.exports.updateOrderPayment = (args)=>{
  //passes in current paymentoption id as arg
  if(args.length === 0) {throw new Error(Error)};
  let {orderid} = getCurrentObj();
  db.run(`UPDATE orders SET paymentid=${args} WHERE orderid = ${orderid}`, (err, data)=>{

  });
};
module.exports.updatePaidInFull = ()=>{
  let {orderid} = getCurrentObj();
  console.log(orderid);
  db.run(`UPDATE orders SET paidinfull = 1 WHERE orderid = ${orderid}`, (err, data)=>{
    if(err){
      console.log(err);
    }

  })
};


module.exports.updateOrderLine(5, 17)
