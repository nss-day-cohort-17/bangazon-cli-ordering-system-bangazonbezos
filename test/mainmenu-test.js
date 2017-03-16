const {assert : {isFunction,throws,isString}} =require('chai');
const {mainMenu} = require('../lib/mainmenu');

describe ('mainmenu',()=>{
  it('should be a function',()=>{
    isFunction(mainMenu)
  });
  it('should have argument ',()=>{
    throws(()=>{mainMenu()})//doesn't have an argument
  });
  //it returns a string('1') ,that goes to pageHandler
  it('should return a string', ()=>{
    isString(mainMenu('1'));
  });

});
