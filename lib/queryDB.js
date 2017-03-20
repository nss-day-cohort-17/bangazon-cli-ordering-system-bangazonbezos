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
  return new Promise ((resolve,reject)=>{
    console.log(`SELECT orderid FROM orders WHERE date="${currentObj.date}" AND customerid = ${currentObj.customerid}`)
    db.get(`SELECT orderid FROM orders WHERE date LIKE "%2017-01-01%" AND customerid = 7`,(err,data)=>{
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
  return new Promise ((resolve,reject)=>{
    db.all('SELECT * FROM products',(err,data)=>{
      if(err) return (err)
        console.log("resolve data",data)
        let productArr = [];
        for( var i in data ) {
            productArr[i] = data[i];
        }
        console.log("productArr",productArr)
        resolve (productArr);
    });
  });
};
module.exports.getPopularity = ()=>{
  return {};
};
module.exports.getProductId = ()=>{
  return 1;
};
module.exports.getActiveCustomers = ()=>{

}
