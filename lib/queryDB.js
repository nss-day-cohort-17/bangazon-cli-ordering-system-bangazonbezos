'use strict'

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('banagzon.sqlite');

module.exports.getCustomerId = (firstname,lastname)=>{
   return new Promise ((resolve,reject)=>{
    db.get(`SELECT customerid FROM customers WHERE firstname = "${firstname}" AND lastname = "${lastname}"`, (err,data)=>{
      if (err) return(err)
      resolve(data.customerid);
    });
  });
};

module.exports.getOrderTotal = ()=>{
  return 1;
};
module.exports.getOrderId = ()=>{
  return 1;
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
