'use strict'
const Table = require('cli-table');
const {getPopularity} = require('./queryDB.js');
// const colors = require('colors');

var table = new Table({
  head: ['Product','Orders','Customers', 'Revenue'],
  colWidths: [18,11,11,15],
  chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
         , 'bottom': '*' , 'bottom-mid': '*' , 'bottom-left': '*' , 'bottom-right': '*'
         , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '}});
var tableContent = new Table({
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
// console.log(table.toString().black);
module.exports.productPopularity = ()=>{
  return getPopularity()
  .then((data)=>{
    data.forEach((value)=>{
      tableContent.push([value.Product,value.orders,value.Customers,value.revenue.toFixed(2)])
    })
    console.log(table.toString())
    console.log(tableContent.toString())
    console.log(endTable.toString());
  })

};

module.exports.productPopularity()
