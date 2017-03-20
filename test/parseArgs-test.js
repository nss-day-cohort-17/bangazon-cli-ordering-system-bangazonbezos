const {assert : {isFunction}} =require('chai');
const {parseArgs}  = require('../lib/parseArgs.js');

describe('parseArgs',()=>{
  it('should be a function',()=>{
    isFunction(parseArgs);
  });
});
