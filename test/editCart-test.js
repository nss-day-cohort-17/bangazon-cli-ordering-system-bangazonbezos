const {assert : {isFunction}} =require('chai');
const {editCart} = require('../lib/editCart.js');

describe ('editCart',()=>{
  it('should be a function',()=>{
    isFunction(editCart)
  });
});
