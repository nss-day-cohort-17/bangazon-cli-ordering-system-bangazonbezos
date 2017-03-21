'use strict'

const sqlite3  = require('sqlite3').verbose(),
      db = new sqlite3.Database('banagzon.sqlite'),
      { getCurrentObj } = require('../lib/currentObj.js');

module.exports.getCustomerId = ()=>{

let currentObj = getCurrentObj();
   return new Promise ((resolve,reject)=>{

    db.get(`SELECT customerid FROM customers WHERE firstname = "${currentObj.firstname}" AND lastname = "${currentObj.lastname}"`,(err,data)=>{
      // if (err) return(err)
      // console.log("customerid",data.customerid);

      resolve(data.customerid);
    });
  });
};

module.exports.getOrderTotal = ()=>{
  let currentObj = getCurrentObj();
  let orderid1 = (currentObj.orderid)
  // console.log(productid1)
  return new Promise ((resolve,reject)=>{
    db.get(`SELECT SUM(products.price*order_line_items.quanity) AS orderTotal
            FROM order_line_items
            JOIN products ON products.productid = order_line_items.productid, orders ON order_line_items.orderid = orders.orderid
            WHERE order_line_items.orderid = ${orderid1}
            ORDER BY products.productid`,(err,data)=>{
              // if(err) return (console.log(err));
              // console.log("orderTotal",data)
              resolve(data.orderTotal.toFixed(2));
            });
  });
};
module.exports.getOrderId = ()=>{
  let currentObj = getCurrentObj();
  return new Promise ((resolve,reject)=>{
    // console.log(`SELECT orderid FROM orders WHERE date="${currentObj.date}" AND customerid = ${currentObj.customerid}`)
    db.get(`SELECT orderid FROM orders WHERE date=${currentObj.orderDate}  AND customerid = ${currentObj.customerid}`,(err,data)=>{
      // if (err) return(err)
      resolve(data.orderid);
    });
  });
};
module.exports.getPaymentOptions = ()=>{
  let currentObj = getCurrentObj();
  return new Promise((resolve,reject)=>{
    db.all(`SELECT * FROM payment_options WHERE customerid = ${currentObj.customerid}`,(err,data)=>{
      // console.log('getPaymentOptions');
      // if(err) console.log(err);
      // // console.log(data);
      // console.log("data", data);
      resolve(data);
    });
  });
};
module.exports.getProducts = ()=>{
  return new Promise ((resolve,reject)=>{
    db.all('SELECT * FROM products',(err,data)=>{
      // if(err) return (err)
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
  return new Promise ((resolve,reject)=>{
    db.all(`SELECT products.name AS "Product" , SUM(products.price * order_line_items.quanity) AS "revenue", SUM(order_line_items.quanity) AS "orders" , COUNT(orders.customerid) AS "Customers" FROM products
            JOIN order_line_items ON order_line_items.productid = products.productid, orders ON orders.orderid = order_line_items.orderid
            GROUP BY products.productid
            ORDER BY SUM(order_line_items.quanity) DESC`,(err,data)=>{
              // if(err) return(console.log(err));
              // console.log("data[0]",data[0]);
              resolve (data)
            });
    });
};
module.exports.getProductId = ()=>{
     console.log(`SELECT productid FROM products WHERE name = "${currentObj.currentProduct.productname}"`)
  return new Promise ((resolve,reject)=>{

    db.get(`SELECT productid FROM products WHERE name = "${currentObj.currentProduct.productname}"`,(err,data)=>{
      if(err) return(err)
        // console.log("resolve productId",data.productid)
        resolve (data.productid)
    });
  });
};
module.exports.getActiveCustomers = ()=>{
  return new Promise ((resolve,reject)=>{
    db.all(`SELECT * FROM customers`,(err,data)=>{
      // if(err) return (err)
      let customerArr = [];
      for (let i in data ) {
        customerArr[i] = data[i]
      }
      // console.log("customerArr",customerArr)
        resolve(customerArr)
    });
  });
}
  module.exports.getOrderLines = ()=>{
    let currentObj = getCurrentObj();
    return new Promise((resolve,reject)=>{

      db.all(`SELECT order_line_items.lineitemid,order_line_items.productid,products.name AS productname,order_line_items.quanity FROM order_line_items
              JOIN products ON products.productid = order_line_items.productid WHERE order_line_items.orderid = ${currentObj.orderid}`,(err,data)=>{
                if(err) console.log('no items are in your cart')
                  let orderLineIdArr = [];
                for (let i in data) {
                  orderLineIdArr[i] = data[i]
                }

                resolve(orderLineIdArr)
              });
    });
  };
  module.exports.getPaymentId = () => {
      let currentObj = getCurrentObj();
      return new Promise((resolve,reject)=>{
      db.all(`SELECT payment_options.paymentid FROM payment_options WHERE payment_options.name = "${currentObj.paymentnickname}" AND payment_options.accountnumber = "${currentObj.paymentaccountnumber}"`,(err,data)=>{
            // if(err) return (err)
            resolve(data)
          console.log(data)
              });
    })
  };
