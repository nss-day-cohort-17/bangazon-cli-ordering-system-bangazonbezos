const {assert : {isFunction}} =require('chai');
const {getCustomerId,getOrderId,getProducts,getOrderTotal,getPaymentOptions,getPopularity} = require('../lib/queryDB.js');

describe ('queryDB',()=>{
  describe ('getCustomerId',()=>{
    it('should be a function',()=>{
     isFunction(getCustomerId)
   });
  });
  describe ('getOrderId',()=>{
    it('should be a function',()=>{
      isFunction(getOrderId)
   });
  });
  describe ('getProducts', ()=>{
    it('should be a function',()=>{
      isFunction(getProducts)
    });
  });
  describe ('getOrderTotal', ()=>{
    it('should be a function',()=>{
      isFunction(getOrderTotal)
    });
  });
  describe ('getPaymentOptions', ()=>{
    it('should be a function',()=>{
      isFunction(getPaymentOptions)
    });
  });
  describe ('getPopularity', ()=>{
    it('should be a function',()=>{
      isFunction(getPopularity)
    });
  });

});
