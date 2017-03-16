const {assert : {isFunction}} =require('chai');
const { updateCurrentObj,clearCurrentObj}  = require('../lib/currentObj.js');

describe('currentObj',()=>{
  describe ('updateCurrentObj',()=>{
    it('should be a function',()=>{
      isFunction(updateCurrentObj);
    });
  });
  describe ('clearCurrentObj',()=>{
    it('should be a function',()=>{
      isFunction(clearCurrentObj);
    });
  });

});
