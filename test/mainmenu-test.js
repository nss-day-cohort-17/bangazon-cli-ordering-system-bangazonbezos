const {assert : {isFunction}} =require('chai');
const {mainMenu} = require('../lib/mainmenu');

describe ('mainmenu',()=>{
  it('should be a function',()=>{
    isFunction(mainMenu)
  });
});
