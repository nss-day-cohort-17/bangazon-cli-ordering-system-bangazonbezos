'use strict';

let currentObj = {
  customerid: "7",
  firstname : "John",
  lastname: "Denver",
  payment: {
    nickname: "",
    accountnumber: "",
  },
  currentProduct: {
    productname: "",
    productid: "",
    quantity: ""
  },
  checkoutInProgress: false,
  currentPage: "mainmenu",
  customerPath: "",
  orderId: "",
  date: "2017/01/01"

}




//takes two arguments
  //this first being the property to update
  //the second being the value to update it to.
module.exports.updateCurrentObj = (args)=>{
  if(args.length === 0 ){throw new Error ("There is no valid entry")};
  currentObj[args[0]] = args[1];
};
module.exports.clearCurrentObj = ()=>{
  currentObj = {
    customerid: "",
    firstname : "",
    lastname: "",
    payment: {
      nickname: "",
      accountnumber: "",
    },
    currentProduct: {
      productname: "",
      productid: "",
      quantity: ""
    },
    checkoutInProgress: false,
    currentPage: "mainmenu",
    customerPath: ""
  }
};

module.exports.getCurrentObj = ()=>{

  return currentObj;
};
