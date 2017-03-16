const {assert : {isFunction}} =require('chai');
const {addProducts} = require('../lib/addProducts.js');

describe ('createCustomer',()=>{
  it('should be a function',()=>{
    isFunction(addProducts)
  });
});
