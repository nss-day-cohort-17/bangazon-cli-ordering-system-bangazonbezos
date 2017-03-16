const {assert : {isFunction}} =require('chai');
const {createCustomer,createOrder,createOrderLine,createPaymentOption} = require('../lib/writeDB.js');

describe ('writeDB',()=>{
  describe ('createCustomer',()=>{
    it('should be a function',()=>{
     isFunction(createCustomer)
   });
  });
  describe ('createOrder',()=>{
    it('should be a function',()=>{
      isFunction(createOrder)
   });
  });
  describe ('createOrderLine', ()=>{
    it('should be a function',()=>{
      isFunction(createOrderLine)
    });
  });
  describe ('createPaymentOption', ()=>{
    it('should be a function',()=>{
      isFunction(createPaymentOption)
    });
  });

});
