const {assert : {isFunction}} =require('chai');
const {productPopularity} = require('../lib/productPopularity.js');

describe ('productPopularity',()=>{
  it('should be a function',()=>{
    isFunction(productPopularity)
  });
});
