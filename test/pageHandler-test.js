const {assert : {isFunction,throws,isObject}} =require('chai');
const { pageHandler } = require('../lib/pageHandler.js');

describe('pageHandler',()=>{
  it('should be a function',()=>{
    isFunction(pageHandler)
  });
  it('should except single argument',()=>{
    throws(()=>{pageHandler()})
  });
  it('should return an object',()=>{
    isObject(pageHandler('1'));
  });
});
