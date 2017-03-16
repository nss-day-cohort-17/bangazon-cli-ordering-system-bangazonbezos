const {assert : {isFunction,throws}} =require('chai');
const { updateOrderLine,updateOrderPayment,updatePaidInFull} = require('../lib/updateDB.js');

describe ('updateDB',()=>{
  describe ('updateOrderLine',()=>{
    it('should be a function',()=>{
     isFunction(updateOrderLine)
   });
    it('should except args',()=>{
      throws(()=>{updateOrderLine()});
    });
  });
  describe ('updateOrderPayment',()=>{
    it('should be a function',()=>{
      isFunction(updateOrderPayment)
   });
    it('should except args',()=>{
      throws(()=>{updateOrderPayment()});
    });
  });
  describe ('updatePaidInFull', ()=>{
    it('should be a function',()=>{
      isFunction(updatePaidInFull)
    });
  });
});
