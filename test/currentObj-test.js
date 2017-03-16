const {assert : {isFunction,throws,isObject}} =require('chai');
const { updateCurrentObj,clearCurrentObj,getCurrentObj}  = require('../lib/currentObj.js');

describe('currentObj',()=>{
  describe ('updateCurrentObj',()=>{
    it('should be a function',()=>{
      isFunction(updateCurrentObj);
    });
    it('should except 2 args',()=>{
      throws(()=>{updateCurrentObj()})
    })
  });
  describe ('clearCurrentObj',()=>{
    it('should be a function',()=>{
      isFunction(clearCurrentObj);
    });
  });
  describe ('getCurrentObj',()=>{
    it('should be a function',()=>{
      isFunction(getCurrentObj);
    });
    it('should return an object',()=>{
      isObject(getCurrentObj());
    })
  });
});
