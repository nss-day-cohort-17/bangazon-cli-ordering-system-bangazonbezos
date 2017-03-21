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
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '},
       style: { 'padding-left': 0, 'padding-right': 0 }});

var tableContent = new Table({
  colWidths: [18,11,11,2,15],
  chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
         , 'bottom': '*' , 'bottom-mid': '*' , 'bottom-left': '*' , 'bottom-right': '*'
         , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '},
         style: { 'padding-left': 0, 'padding-right': 0 }
});
var endTable  = new Table({
  chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
         , 'bottom': '*' , 'bottom-mid': '*' , 'bottom-left': '*' , 'bottom-right': '*'
         , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '},
         style: { 'padding-left': 0, 'padding-right': 0 }
});
var totalTable = new Table({
  colWidths: [18,11,11,2,15],
  chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
         , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '},
         style: { 'padding-left': 0, 'padding-right': 0 }
});
// console.log(table.toString().black);

module.exports.productPopularity = ()=>{
  let orderTotal = 0;
  let CustomersTotal = 0 ;
  let revenueTotal = 0;
  return getPopularity()
  .then((data)=>{
    if (tableContent.length >0) { tableContent = new Table({
      colWidths: [18,11,11,2,15],
      chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
             , 'bottom': '*' , 'bottom-mid': '*' , 'bottom-left': '*' , 'bottom-right': '*'
             , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
             , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '},
             style: { 'padding-left': 0, 'padding-right': 0 }
      })};
    data.forEach((value)=>{
      tableContent.push([value.Product,value.orders,value.Customers,"$",value.revenue.toFixed(2)]);
      orderTotal += value.orders
      CustomersTotal += value.Customers
      revenueTotal += value.revenue
    })
    if (totalTable.length > 0 ) {totalTable = new Table({
        colWidths: [18,11,11,2,15],
        chars: {'top': ' ' , 'top-mid': ' ' , 'top-left': ' ' , 'top-right': ' '
               , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
               , 'left': ' ' , 'left-mid': ' ' , 'mid': ' ' , 'mid-mid': ' '
               , 'right': ' ' , 'right-mid': ' ' , 'middle': ' '},
               style: { 'padding-left': 0, 'padding-right': 0 }
      }) }
    totalTable.push(['Totals',orderTotal,CustomersTotal,"$",revenueTotal.toFixed(2)])
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
        const {displayMainMenu } = require('./mainmenu.js');
        displayMainMenu();
   });
  })
};
