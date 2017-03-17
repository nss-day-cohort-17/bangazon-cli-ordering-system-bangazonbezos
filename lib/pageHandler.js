'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')

module.exports.pageHandler = (arg)=>{
  if(arg.length === 0 ){throw new Error ("There is no valid entry")};
  	switch (arg) {
	  case '1':
		console.log(arg)
		break
	  case '2':
		console.log('2')
		break
	  case '3':
		console.log(arg)
		break
	  case '4':
		console.log(arg)
		break
	  case '5':
		console.log(arg)
		break
	  case '6':
		console.log(arg)
		break
	  case '7':
	  	console.log(arg)
	  	break
	}
  return {};
};
