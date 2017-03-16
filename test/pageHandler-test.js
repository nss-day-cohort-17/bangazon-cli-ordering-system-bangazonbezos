const {assert : {isFunction}} =require('chai');
const { pageHandler } = require('../lib/pageHandler.js');

describe('pageHandler',()=>{
  it('should be a function',()=>{
    isFunction(pageHandler)
  });
});
