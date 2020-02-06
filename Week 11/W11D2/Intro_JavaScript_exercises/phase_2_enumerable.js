// Phase 2: Enumerable
// Overview
// JavaScript enumerates over arrays differently than Ruby;
// rather than taking a block, they take a callback
// function, which is invoked
// for each element of the array.Take a look at the MDN Array Documentation
// if it is unclear how these methods are supposed to work.

// Instructions
// Again, monkey - patch the following methods to the Array class using swell 
// new language we 've been learning.

// Array# myEach(callback) - receives a callback
// function and executes the callback
// for each element in the array
// Note that JavaScript 's forEach function has no return value 
// (returns undefined)
// Array# myMap(callback) - receives a callback
// function, returns a new array of the results of calling the callback
// function on each element of the array
// should use myEach and a closure
// Array# myReduce(callback[, initialValue]) - 
// (like Ruby 's Array#inject) receives a callback function, 
// and optional initial value, returns an accumulator by applying the callback 
// function to each element and the result of the last invocation of the callback 
// (or initial value if supplied)

// initialValue is optional and should
//  default to the first element of the array
//   if not provided examples:

//  // without initialValue
//         [1, 2, 3].myReduce(function (acc, el) {
//             return acc + el;
//         }); // => 6

//         // with initialValue
//         [1, 2, 3].myReduce(function (acc, el) {
//             return acc + el;
//         }, 25); // => 31
//         should also use myEach

//         NB[initialValue] is the conventional way
//         for documentation to express that the args between[and] 
//          are optional inputs.Your
//         function definition will not include these square brackets.

//         Recap Closures and callbacks are part of the foundation of 
// JavaScript and provide us with a lot of 
// flexibility and modularity in our code.
// Thanks to closures we can create higher order functions and "hide"
//         private variables.

const mycallback1 = function (el) {
    console.log(el + 10);
};


Array.prototype.myEach = function (callback) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        callback(el);
    }
};

[1, 2, 3, 4].myEach(el => mycallback1(el));

// def mymap(&prc)
//     result = []
//     self.each do |el|
//         result << prc.call(el)
//     end
//     result
// end

// Array.prototype.myMap = function (callback) {
//     let result = [];
//     let array = this;
//     function myeachcallback (el) {
//         result.push(callback(el))
//     }
//     array.myEach(myeachcallback);
//     console.log(result)
// };

const mycallback2 = function (el) {
    return el * 10;
};

Array.prototype.myMap = function (callback) {
    let result = [];
    // function myEachCb (el) {
    //     result.push(callback(el));
    // }; 
    this.myEach(el => result.push(callback(el)))
    // result.push(callback(this[i]))
    console.log(result)
};

[1, 2, 3, 4].myMap(el => mycallback2(el));


const mycallback3 = function (el) {
    return el;
};

Array.prototype.myReduce = function (callback, initialValue) {
    // let result = 0;
    let acc = 0;
    if (initialValue) {
        acc = initialValue;
    }
    function myReduceCb(el) {
        acc += callback(el);
    };
    this.myEach(myReduceCb);
    console.log(acc);
};

[1, 2, 3].myReduce(mycallback3); // 6
[1, 2, 3].myReduce(mycallback3, 25); // 31



// // Array#myInject
// Array.prototype.myReduce = function (func, initialValue) {

//     let arr = this;

//     if (initialValue === undefined) {
//         initialValue = arr[0];
//         arr = arr.slice(1);
//     }

//     let result = initialValue;

//     arr.myEach(el => result = func(result, el));
//     // arr.each do |el|
//     //     result = prc.call(result, el)
//     // end

//     return result;
// };

// console.log(NUMS.myReduce((total, item) => total + item));

// [1, 2, 3].my_reduce do |acc, el|
//     acc + el
// end
