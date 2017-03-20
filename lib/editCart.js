'use strict'

const {getCurrentObj} = require('./currentObj.js');

const {getOrderLines} = require('./queryDB.js');

let orderLines;

module.exports.editCart = ()=>{
  let {orderid} = getCurrentObj();

    getOrderLines(orderId)
    .then((data)=>{

    })


};
