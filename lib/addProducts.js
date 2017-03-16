'use strict'
//display whats going on
//get user prompts
module.exports.addProducts = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter valid entry')};
  return '1';
};

module.exports.quantity = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter quantity')};
  return '1';
};

module.exports.confirmProduct = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter quantity')};
  return 'y';
};
