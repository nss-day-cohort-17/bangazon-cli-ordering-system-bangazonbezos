'use strict'

const sqlite3  = require('sqlite3').verbose(),
      db = new sqlite3.Database('banagzon.sqlite'),
      { getCurrentObj } = require('../lib/currentObj.js');

let currentObj = getCurrentObj();
module.exports.getCustomerId = ()=>{

   return new Promise ((resolve,reject)=>{
    db.get(`SELECT customerid FROM customers WHERE firstname = "${currentObj.firstname}" AND lastname = "${currentObj.lastname}"`,(err,data)=>{
      if (err) return(err)
      console.log("customerid",data.customerid);
      resolve(data.customerid);
    });
  });
};
module.exports.getOrderTotal = ()=>{
  return 1;
};
module.exports.getOrderId = ()=>{
  console.log(typeof currentObj.date)
  return new Promise ((resolve,reject)=>{
    db.get(`SELECT orderid FROM orders WHERE date = "${currentObj.date}" AND customerid = ${currentObj.customerid}`,(err,data)=>{
      if (err) return(err)
      console.log("orderid",data);
      resolve(data);
    });
  });
};
module.exports.getPaymentOptions = ()=>{
  return [];
};
module.exports.getProducts = ()=>{
  return [];
};
module.exports.getPopularity = ()=>{
  return {};
};
module.exports.getProductId = ()=>{
  return 1;
};
