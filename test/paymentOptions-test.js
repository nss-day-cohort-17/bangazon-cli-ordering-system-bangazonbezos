const {assert : {isFunction,isBoolean,throws,isString}} =require('chai');
const {checkForStoredPayment,storedPayment,createPayment} = require('../lib/paymentOptions.js');

describe ('confirmCheckout',()=>{
  describe ('checkForStoredPayment',()=>{
    it('should be a function',()=>{
    isFunction(checkForStoredPayment)
    });
    it('should return yes/no',()=>{
      isBoolean(checkForStoredPayment())
    });
  });
  describe ('storedPayment',()=>{
    it('should be a function',()=>{
      isFunction(storedPayment)
    });
    it('should return a string',()=>{
      isString(storedPayment('1'));
   });
   it('should have an argument',()=>{
    throws(()=>{storedPayment()});
    });
  });
  describe ('createPayment',()=>{
    it('should be a function',()=>{
      isFunction(createPayment)
    });
    it('should have an argument',()=>{
      throws(()=>{createPayment()});
    });
    it('should return a string',()=>{
      isString(createPayment('1'));
   });
  });

});
