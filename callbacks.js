function myEach(fn){
	for(i=0;i<this.length;i++){
  	fn(this[i]);
  }
}

Array.prototype.myEach = myEach;
[1,2,3,4].myEach(function(item){
	console.log(item);
});

function myMap(fn1,fn2){
	var a = [];
  var b= [];
	this.myEach(function(item){
  	a.push(fn1(item));
  });
  a.myEach(function(item){
  	b.push(fn2(item));
  });
  
  return b;
}

Array.prototype.myMap = myMap;

// #Callback Exercises

// 1.  Write a function, funcCaller, that takes a func (a function) and an arg (any data type). 
//    The function returns the func called with arg(as an argument).

function funcCaller(func,arg){
  return func(arg);
}
    
// 2.  Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with
//     the first index of the arr, the index # and the whole array.

// 3.  Change firstVal to work not only with arrays but also objects. 
//     Since objects are not ordered, you can use any key-value pair on the object.

function firstVal(arr,func){
  func(arr[0],0, arr);
}

// 4.  [Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) that takes a function and 
//     returns a version of that function which can only be called once. 
//     [Hint: you need a closure] You probably don't want to be able to double charge someone's credit card. 
//     Here is an example of how to use it:
/*
      var chargeCreditCard = function(num, price){
        //charges credit card for a certain price
      };
      var processPaymentOnce = once(chargeCreditCard);
      processPaymentOnce(123456789012, 200);
  */

  function once(func){
    var count = 0;
    function oneFunc(){
      if(count==0){
        count += 1;
        return func.apply(null,Array.prototype.slice.call(arguments));
      }
      return null;
    }
    return oneFunc     ;
  }