const {assert : {isFunction}} =require('chai');
const {confirmCart} = require('../lib/confirmCart.js');

describe ('confirmCart',()=>{
  it('should be a function',()=>{
    isFunction(confirmCart)
  });
});
