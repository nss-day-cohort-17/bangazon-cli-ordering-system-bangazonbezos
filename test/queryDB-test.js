const {assert : {isFunction,isNumber,isArray,isObject,equal}} =require('chai');
const {getCustomerId,getOrderId,getProducts,getOrderTotal,getPaymentOptions,getPopularity,getProductId} = require('../lib/queryDB.js');

describe ('queryDB',()=>{
  describe ('getCustomerId',()=>{
    it('should be a function',()=>{
     isFunction(getCustomerId)
   });
    it('should return a customerid',()=>{
      let expected = 7;
      return getCustomerId("John","Denver")
      .then((data)=>{
        let result = data;
        console.log(data)
        equal(expected,result);
      });
    });
  });
  describe ('getOrderId',()=>{
    it('should be a function',()=>{
      isFunction(getOrderId)
   });
    it('should return a oredrId',()=>{
      isNumber(getOrderId());
    });
  });
  describe ('getProducts', ()=>{
    it('should be a function',()=>{
      isFunction(getProducts)
    });
    it('should return an array',()=>{
      isArray(getProducts());
    });
  });
  describe ('getOrderTotal', ()=>{
    it('should be a function',()=>{
      isFunction(getOrderTotal)
    });
    it('should return a number',()=>{
      isNumber(getOrderTotal());
    });
  });
  describe ('getPaymentOptions', ()=>{
    it('should be a function',()=>{
      isFunction(getPaymentOptions)
    });
    it('should return an array',()=>{
      isArray(getPaymentOptions());
    });
  });
  describe ('getPopularity', ()=>{
    it('should be a function',()=>{
      isFunction(getPopularity)
    });
    it('should return an object',()=>{
      isObject(getPopularity());
    });
  });
  describe('getProductId', ()=>{
    it('should be a function',()=>{
      isFunction(getProductId)
    });
    it('should return a number',()=>{
      isNumber(getProductId());
    });
  });

});
