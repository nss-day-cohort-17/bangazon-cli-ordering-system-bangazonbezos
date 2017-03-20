const {assert : {isFunction,throws,isObject}} =require('chai');
const {activeCustomers} = require('../lib/activeCustomers.js');

describe('activeCustomers',()=>{
  it('should be a function',()=>{
    isFunction(activeCustomers);
  });
  it('should return object',()=>{
    isObject(activeCustomers());
  })
});
