'use strict'
const Table = require('cli-table');
const {getPopularity} = require('./queryDB.js');
var table = new Table({
  head: ['Product','Orders','Customers', 'Revenue'],
  colWidths: [18,11,11,15],
  chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
         , 'bottom': '*' , 'bottom-mid': '*' , 'bottom-left': '*' , 'bottom-right': '*'
         , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '}
});
var endTable  = new Table({
  chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
         , 'bottom': '*' , 'bottom-mid': '*' , 'bottom-left': '*' , 'bottom-right': '*'
         , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '}
});
console.log(table.toString());
module.exports.productPopularity = ()=>{
  return getPopularity()
  .then((data)=>{
    data.forEach((value)=>{
      console.log(value.name,value.orders,value.customers,value.revenue)
    })
    console.log(endTable);
  })

};

module.exports.productPopularity()
