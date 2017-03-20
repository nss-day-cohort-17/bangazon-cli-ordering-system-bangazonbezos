const {assert : {isFunction,throws}} =require('chai');
const {createCustomer,createOrder,createOrderLine,createPaymentOption} = require('../lib/writeDB.js');

describe ('writeDB',()=>{
  describe ('createCustomer',()=>{
    it('should be a function',()=>{
     isFunction(createCustomer)
   });
    it('should have an arg',()=>{
      throws(()=>{createCustomer()});
    });
  });
  describe ('createOrder',()=>{
    it('should be a function',()=>{
      isFunction(createOrder)
   });
    // it('should have customerId as arg',()=>{
    //   throws(()=>{createOrder()})
    // });
  });
  describe ('createOrderLine', ()=>{
    it('should be a function',()=>{
      isFunction(createOrderLine)
    });
    it('should have single argument',()=>{
      throws(()=>{createOrderLine()})
    });
  });
  describe ('createPaymentOption', ()=>{
    it('should be a function',()=>{
      isFunction(createPaymentOption)
    });
    it('should have single argument',()=>{
      throws(()=>{createPaymentOption()})
    });
  });

});
