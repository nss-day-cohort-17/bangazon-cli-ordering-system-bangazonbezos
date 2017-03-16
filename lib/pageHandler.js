'use strict';

module.exports.pageHandler = (arg)=>{
  if(arg.length === 0 ){throw new Error ("There is no valid entry")};
  return {};
};
