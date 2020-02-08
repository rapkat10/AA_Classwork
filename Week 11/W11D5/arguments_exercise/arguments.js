function sum () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

function newSum (...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// console.log(newSum(1, 2, 3, 4)) //=== 10;
// console.log(newSum(1, 2, 3, 4, 5)) //=== 15;

Function.prototype.myBind = function (context){
    // console.log(arguments)
    const that = this;
    // saving reference to the function
    // so you don't lose this
    const bindArgs = Array.prototype.slice.call(arguments, 1);
    // grabing the bind time arguments except for the first argument 1, 2, 3
    // console.log(bindArgs)
    return function (){
        // console.log(arguments)
        const callArgs = Array.prototype.slice.call(arguments);
        // console.log(callArgs)
        const allArgs = bindArgs.concat(callArgs);
        return that.apply(context, allArgs);
    };
};

Function.prototype.myNewBind = function (context, ...args) {
    // console.log(args)
    const that = this;
    const bindArgs = args;
    // console.log(bindArgs)
    return function (...args){
        // console.log(args)
        const callArgs = args;
        const allArgs = bindArgs.concat(callArgs);
        return that.apply(context, allArgs);
    };
};


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();  // Pavlov says meow to Kush!
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
    let numbers = [];

    function _curriedSum(num){
        numbers.push(num);

        if (numbers.length === numArgs){
            let totalSum = 0;
            numbers.forEach((ele) => {
                totalSum += ele;
            });
            return totalSum;
        } else {
            // numbers.push(num);
            return _curriedSum;
        };
    }
    return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
    let args = [];
    const that = this;
    function _curriedSum(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            // console.log(args)
            return that.apply(undefined, args); // use apply if you have a context to pass in!
            // return that(...args); // use this if you dont want to use apply!
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sumThree.curry(3)(4)(20)(6)); // == 30

// const sum2 = curriedSum(4);
// console.log(sum2(5)(30)(20)(1)); // => 56
// sum2(5)(30)(20)(1);