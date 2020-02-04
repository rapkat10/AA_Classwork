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
        }
    })
    console.log(newArr)
};
[1, 2, 2, 3, 3, 3].myuniq() // [1, 2, 3]

// Array#twoSum
Array.prototype.mytwosum = function () {
    let newArr = [];
    let array = this
    this.forEach(function (el1) {
        array.forEach(function(el2) {
            let index1 = array.indexOf(el1)
            let index2 = array.indexOf(el2)
            if (el1 + el2 === 0 && index2 > index1) {
                newArr.push([index1, index2])
            }
        })
    })
    console.log(newArr)
};
[1, 2, -2, 3, 5, -3].mytwosum() // [[1, 2], [3, 5]]

// Array#transpose
Array.prototype.mytranspose = function () {
    let result = this
    let arr = result[0].map((col, i) => result.map(row => row[i]));
    console.log(arr)
};
[[1, 2, 3], [4, 5, 6], [7, 8, 9]].mytranspose() // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
