'use strict';

let currentObj = {
  customerid: "5",
  firstname : "",
  lastname: "",
  payment: {
    nickname: "",
    accountnumber: "",
  },
  paymentid: "5",
  currentProduct: {
    productname: "",
    productid: "",
    quantity: ""
  },
  checkoutInProgress: false,
  currentPage: "mainmenu",

  customerPath: "",
  orderid: "8",
  orderDate: ""

}

//takes two arguments
  //this first being the property to update
  //the second being the value to update it to.

module.exports.updateCurrentObj = (arg1, arg2)=>{
  if(arg1.length === 0 ){throw new Error ("There is no valid entry")};
  currentObj[arg1] = arg2;

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
    paymentid: "",
    currentProduct: {
      productname: "",
      productid: "",
      quantity: ""
    },
    checkoutInProgress: false,
    currentPage: "mainmenu",
    customerPath: "",
    orderid: ""
  }
};

module.exports.getCurrentObj = ()=>{
  return currentObj;
};
