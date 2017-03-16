const {assert : {isFunction}} =require('chai');
const {createCustomer} = require('../lib/createCustomer.js');

describe ('createCustomer',()=>{
  it('should be a function',()=>{
    isFunction(createCustomer)
  });
});
