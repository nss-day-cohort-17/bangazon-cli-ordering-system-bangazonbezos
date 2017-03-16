'use strict'

module.exports.confirmCart = (arg)=>{
  if(arg.length===0) {throw new ReferenceError ("please select a valid entry")}
  return '1';
};
