const {assert : {isFunction,isString,throws}} =require('chai');
const {confirmCart} = require('../lib/confirmCart.js');

describe ('confirmCart',()=>{
  it('should be a function',()=>{
    isFunction(confirmCart)
  });
  it('should return a string',()=>{
    isString(confirmCart('1'));
  });
  it('should have an argument',()=>{
    throws(()=>{confirmCart()});
  });
});
