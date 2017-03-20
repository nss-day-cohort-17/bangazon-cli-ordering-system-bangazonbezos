'use strict'
const Table = require('cli-table');
const {getPopularity} = require('./queryDB.js');
const prompt = require('prompt');

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
var totalTable = new Table({
  colWidths: [18,11,11,15],
  chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '}
});
// console.log(table.toString().black);
module.exports.productPopularity = ()=>{
  let orderTotal = 0;
  let CustomersTotal = 0 ;
  let revenueTotal = 0;
  return getPopularity()
  .then((data)=>{
    data.forEach((value)=>{
      tableContent.push([value.Product,value.orders,value.Customers,value.revenue.toFixed(2)]);
      orderTotal += value.orders
      CustomersTotal += value.Customers
      revenueTotal += value.revenue
    })
    console.log(orderTotal)
    totalTable.push(['Totals',orderTotal,CustomersTotal,revenueTotal])
    console.log(table.toString());
    console.log(tableContent.toString());
    console.log(endTable.toString());
    console.log(totalTable.toString());


//
  prompt.message = ''
  prompt.delimiter = `
>`;

  prompt.start();
    prompt.get({
      properties: {
        confirm:{
          description: 'Press any key to return to main menu'
        }
      }
    }, function (err, result) {
      let { confirm } = result
      // console.log(arg + ' x' + quantity)
      // create orderline then back to products
      // if (confirm = 'b') {
        // createOrderLine()
        const {displayMainMenu } = require('./mainmenu.js');
        displayMainMenu();
      // }
   });
  })
};

// module.exports.productPopularity()
