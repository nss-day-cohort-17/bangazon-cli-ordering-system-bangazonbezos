const {assert : {isFunction, isNumber, isString}} =require('chai');
const {editCart, quantity, confirmEdit} = require('../lib/editCart.js');
describe('editCart',()=>{
  describe ('editCart',()=>{
    it('should be a function',()=>{
      isFunction(editCart)
    });
    // it('should return a number', ()=>{
    //   isNumber(editCart());
    // })
  });
  // describe('quantity', ()=>{
  //   it('should return a number', ()=>{
  //     isNumber(quantity(2, 3));
  //   })
  // });
  // describe('confirmEdit', ()=>{
  //   it('should return a string', ()=>{
  //     isString(confirmEdit(2, 3));
  //   })

  // })
})
