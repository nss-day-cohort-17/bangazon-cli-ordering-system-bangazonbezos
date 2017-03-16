const {assert : {isFunction,throws,isString}} =require('chai');
const {addProducts,quantity,confirmProduct} = require('../lib/addProducts.js');

describe ('addProducts',()=>{
  describe ('addProducts',()=>{
    it('should be a function',()=>{
      isFunction(addProducts);
    });
    it('should have argument ',()=>{
      throws(()=>{addProducts()})//doesn't have an argument
    });
    it('should return a string', ()=>{
      isString(addProducts('1'));
    });
  });
  describe ('quantity',()=>{
    it('should be a function',()=>{
      isFunction(quantity);
    });
    it('should have argument ',()=>{
      throws(()=>{quantity()})//doesn't have an argument
    });
    it('should return a string', ()=>{
      isString(quantity('1'));
    });
  });
  describe ('confirmProduct',()=>{
    it('should be a function',()=>{
      isFunction(confirmProduct);
    });
    it('should have argument ',()=>{
      throws(()=>{confirmProduct()})//doesn't have an argument
    });
    it('should return a string', ()=>{
      isString(confirmProduct('y'));
    });
  });
});
