const {assert : {isFunction}} =require('chai');
const { updateOrderLine,updateOrderPayment,updatePaidInFull} = require('../lib/updateDB.js');

describe ('updateDB',()=>{
  describe ('updateOrderLine',()=>{
    it('should be a function',()=>{
     isFunction(updateOrderLine)
   });
  });
  describe ('updateOrderPayment',()=>{
    it('should be a function',()=>{
      isFunction(updateOrderPayment)
   });
  });
  describe ('updatePaidInFull', ()=>{
    it('should be a function',()=>{
      isFunction(updatePaidInFull)
    });
  });
});
