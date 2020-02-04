// Phase 1: Arrays
// Overview
// Let's take a little while to create a few (hopefully familiar) functions. These should give you some experience iterating over and mutating arrays.

// Instructions
// Monkey - patch the following methods to the Array class.Remember, we want to use prototype here.

//     Array#uniq - returns a new array containing each individual element of the original array only once(creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array
//     ([1, 2, 2, 3, 3, 3].uniq() => [1, 2, 3])

// Array#twoSum - returns an array of position pairs where the elements sum to zero

// Array#transpose - where we have a two - dimensional array representing a matrix.returns the transpose
// should not mutate the original array

// Recap
// That was super fun, right ?

//   Array#uniq

Array.prototype.myuniq = function () {
    let newArr = [];
    this.forEach(function(el) {
        if (!newArr.includes(el)) {
            newArr.push(el);
        })
    }
    console.log(newArr)
};

[1, 2, 2, 3, 3, 3].myuniq()


