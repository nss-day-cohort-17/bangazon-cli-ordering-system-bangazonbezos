'use strict'

module.exports.checkForStoredPayment = ()=>{
  return true;
};
module.exports.storedPayment = (arg)=>{
  if(arg.length === 0 ){throw new Error ('Please enter valid entry');}
  return '1';
};
module.exports.createPayment = (arg)=>{
  if(arg.length === 0 ){throw new Error ('Please enter valid entry');};
  return '1';
};
