const {assert : {isFunction}} =require('chai');
const { writeToConsole } = require('../lib/writeToConsole.js');

describe ('writeToConsole',()=>{
  it('should be a function', ()=>{
    isFunction (writeToConsole);
  });
});
