const {assert : {isFunction}} =require('chai');
const {checkForStoredPayment,storedPayment,createPayment} = require('../lib/paymentOptions.js');

describe ('confirmCheckout',()=>{
  describe ('checkForStoredPayment',()=>{
    it('should be a function',()=>{
    isFunction(checkForStoredPayment)
    });
  });
  describe ('storedPayment',()=>{
    it('should be a function',()=>{
      isFunction(storedPayment)
    });
  });
  describe ('createPayment',()=>{
    it('should be a function',()=>{
      isFunction(createPayment)
    });
  });

});
