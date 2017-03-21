'use strict'

const { getUnpaidCustomer,getCustomerId } = require('./queryDB.js');
const prompt = require('prompt');
const {checkForStoredPayment } = require('./paymentOptions.js');
const { getCurrentObj, updateCurrentObj } = require('./currentObj.js');

module.exports.completeOrder = ()=>{
  let unpaidCustomerList ;
  getUnpaidCustomer()
  .then ((data)=>{
    unpaidCustomerList = data;
    // console.log("unpaidCustomer",unpaidCustomerList)
    for(var i = 0; i < unpaidCustomerList.length;i++){
      console.log((i+1)+". "+unpaidCustomerList[i].CustomerName +"        $" + unpaidCustomerList[i].orderTotal.toFixed(2))
    }
           console.log(`b. main menu`)
     prompt.message = ''
  prompt.delimiter = `
>`;

  prompt.start();
    prompt.get({
      properties: {
        customerNumber:{
          description: 'Select Customer',
        }
      }
    }, function(err,result){
        let arg = result.customerNumber
        if (arg <= unpaidCustomerList.length && arg > 0) {
        let customerPicked = unpaidCustomerList[arg - 1]
        updateCurrentObj('firstname', customerPicked.CustomerName.toString().split(" ")[0])
        updateCurrentObj('lastname', customerPicked.CustomerName.toString().split(" ")[1])
        getCustomerId()
        .then((data)=>{
          updateCurrentObj('customerid', data)
          checkForStoredPayment()
        })


      }else if (arg.toLowerCase() === 'b') {
        const {displayMainMenu} = require('./mainmenu.js');
          displayMainMenu()
        }
        else {
        console.log('Please provide a valid entry!')
        setTimeout(function() { module.exports.activeCustomers() }, 1500 )
      }
    })
  })
};
