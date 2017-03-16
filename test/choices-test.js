const {assert : {isFunction,throws,isObject}} =require('chai');
const { userChoices }  = require('../lib/choices.js');

describe ('userChoices', ()=>{
  it('should be a function', ()=>{
    isFunction(userChoices);
  });
  it('should except an arg',()=>{
    throws(()=>{userChoices()});
  });
  it('should return an object',()=>{
    isObject(userChoices('1'));
  });
});
