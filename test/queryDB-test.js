const {assert : {isFunction,isNumber,isArray,isObject,deepEqual,equal}} =require('chai');
const {getCustomerId,getOrderId,getProducts,getOrderTotal,getPaymentOptions,getPopularity,getProductId,getActiveCustomers,orderLineId} = require('../lib/queryDB.js');
const {customers} = require('../customers.json');
const {payment_options} =require('../paymentOptions.json')
// console.log("customers",customers.customers)
describe ('queryDB',()=>{
  describe ('getCustomerId',()=>{
    it('should be a function',()=>{
     isFunction(getCustomerId)
   });
    it('should return a customerid',()=>{
      let expected = 7;
      return getCustomerId()
      .then((data)=>{
        let result = data;
        console.log(data)
        equal(expected,result);
      });
    });
  });
  describe ('getOrderId',()=>{
    it('should be a function',()=>{
      isFunction(getOrderId)
   });
    // it('should return a orderid',()=>{
    //   let expected = 11;
    //   return getOrderId()
    //   .then((data)=>{
    //     let result = data;
    //     console.log(data)
    //     equal(expected,result);
    //     // done();
    //   });
    // });
  });
  describe ('getProducts', ()=>{
    it('should be a function',()=>{
      isFunction(getProducts)
    });
    // it('should return an array',()=>{
    //   isArray(getProducts());
    // });
    it('should return a products',()=>{
      let expected = [ { productid: 1,
    name: 'pencil sharper',
    price: 2.99,
    description: 'Metal casing and steel blade. Standard size.' },
  { productid: 2,
    name: 'tesla model S',
    price: 99000,
    description: 'full-sized all-electric five-door, luxury liftback, produced by Tesla Inc., and introduced in June 2012' },
  { productid: 3,
    name: 'olive & sinclair chocolate bar',
    price: 7.99,
    description: 'Stone ground artisan chocolate.' },
  { productid: 4,
    name: 'light bulb',
    price: 4.99,
    description: 'LED standard sized bulb.  All the lumens.' },
  { productid: 5,
    name: 'nalgene water bottle',
    price: 9.99,
    description: '32 oz quality water bottle. BPA free.' },
  { productid: 6,
    name: 'dry erase markers',
    price: 5.99,
    description: 'Standard size, standard colors.' },
  { productid: 7,
    name: '6 foot step ladder',
    price: 69.99,
    description: 'aluminum ladder, 6 foot, collapsable ladder.' },
  { productid: 8,
    name: 'Stonewall Kitchen Waffle Mix',
    price: 9.99,
    description: 'Specialty waffle mix.  Original flavor' },
  { productid: 9,
    name: 'Bentons Bacon',
    price: 20.99,
    description: 'Best bacon money can buy.  One pound package, thick cut.' },
  { productid: 10,
    name: 'pencil',
    price: 0.99,
    description: 'Artisan fashioned pencil, hand cut wood.' } ];
      return getProducts()
      .then((data)=>{
        let result = data;
        console.log("products from test",data)
        deepEqual(expected,result);
      });
    });
  });
  describe ('getOrderTotal', ()=>{
    it('should be a function',()=>{
      isFunction(getOrderTotal)
    });
    it('should return a number',()=>{
      let expected = 209.97;
      return getOrderTotal()
      .then((data)=>{
        let results = data;
        console.log("orderTotal",data)
        equal(expected,results);
      });
    });
  });
  describe ('getPaymentOptions', ()=>{
    it('should be a function',()=>{
      isFunction(getPaymentOptions)
    });
    it('should return an array',()=>{
      let expected = [{
                      "name": "Checking",
                      "accountnumber": "0192847623",
                      "customerid" : 7,
                      "paymentid" :4
                    }];
      return getPaymentOptions()
      .then((data)=>{
        let result = data;
        deepEqual(expected,result);
      });
    });
  });
  describe ('getPopularity', ()=>{
    it('should be a function',()=>{
      isFunction(getPopularity)
    });
    it('should return an object',()=>{
      let expected = { name: 'nalgene water bottle', revenue: 169.83, quanity: 17 }
      return getPopularity()
      .then((data)=>{
        let result = data;
        deepEqual(expected,result)
      });
    });
  });
  describe('getProductId', ()=>{
    it('should be a function',()=>{
      isFunction(getProductId)
    });
    it('should return a number',()=>{
      let expected = 10;
      return getProductId()
      .then ((data)=>{
        let result = data;
        // console.log(data)
        equal(expected,result);
      });
    });
  });
  describe('getActiveCustomers',()=>{
    it('should return an array of customers',()=>{
      let expected = customers
      return getActiveCustomers()
      .then ((data)=>{
        let result = data;
        // console.log("data from test",data)
        deepEqual(expected,result)
     });
    });
  });
  describe('orderLineId',()=>{
    it('should be a function',()=>{
      isFunction(orderLineId)
    });
    it('should return an array ',()=>{
      return orderLineId()
      .then((data)=>{
        isArray(data)
      });
    })
  });
});
