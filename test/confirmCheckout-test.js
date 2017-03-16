const {assert : {isFunction}} =require('chai');
const {confirmCheckout} = require('../lib/confirmCheckout.js');

describe ('confirmCheckout',()=>{
  it('should be a function',()=>{
    isFunction(confirmCheckout)
  });
});
