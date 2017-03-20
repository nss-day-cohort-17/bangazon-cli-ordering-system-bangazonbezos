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
    // console.log(`SELECT orderid FROM orders WHERE date="${currentObj.date}" AND customerid = ${currentObj.customerid}`)
    db.get(`SELECT orderid FROM orders WHERE date LIKE "%2017-01-01%" AND customerid = 7`,(err,data)=>{
      if (err) return(err)
      console.log("orderid",data);
      resolve(data);
    });
  });
};
module.exports.getPaymentOptions = ()=>{
  return new Promise((resolve,reject)=>{
    db.all(`SELECT * FROM payment_options WHERE customerid = ${currentObj.customerid}`,(err,data)=>{
      if(err) return(err);
      console.log(data);
      resolve(data);
    });
  });
};
module.exports.getProducts = ()=>{
  return new Promise ((resolve,reject)=>{
    db.all('SELECT * FROM products',(err,data)=>{
      if(err) return (err)
        // console.log("resolve data",data)
        let productArr = [];
        for( let i in data ) {
            productArr[i] = data[i];
        }
        // console.log("productArr",productArr)
        resolve (productArr);
    });
  });
};
module.exports.getPopularity = ()=>{
  return {};
};
module.exports.getProductId = ()=>{
     console.log(`SELECT productid FROM products WHERE name = "${currentObj.currentProduct.productname}"`)
  return new Promise ((resolve,reject)=>{

    db.get(`SELECT productid FROM products WHERE name = "${currentObj.currentProduct.productname}"`,(err,data)=>{
      if(err) return(err)
        console.log("resolve productId",data.productid)
        resolve (data.productid)
    });
  });
};
module.exports.getActiveCustomers = ()=>{
  return new Promise ((resolve,reject)=>{
    db.all(`SELECT * FROM customers`,(err,data)=>{
      if(err) return (err)
      let customerArr = [];
      for (let i in data ) {
        customerArr[i] = data[i]
      }
      // console.log("customerArr",customerArr)
        resolve(customerArr)

    });
  });

}
