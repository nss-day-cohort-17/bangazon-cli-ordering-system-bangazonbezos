const {assert : {isFunction}} =require('chai');
const {createCustomerMenu} = require('../lib/createCustomerMenu.js');

describe ('createCustomer',()=>{
  it('should be a function',()=>{
    isFunction(createCustomerMenu)
  });
});
