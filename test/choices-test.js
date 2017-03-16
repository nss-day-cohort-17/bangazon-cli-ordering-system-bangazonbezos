const {assert : {isFunction}} =require('chai');
const { userChoices }  = require('../lib/choices.js');

describe ('userChoices', ()=>{
  it('should be a function', ()=>{
    isFunction(userChoices)
  });
});
