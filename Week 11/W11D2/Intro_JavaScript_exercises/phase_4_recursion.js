// Phase 4: Recursion
// Overview
// Thought you were done with recursion, eh ? Never!Recursion is not only an important method of destructuring problems, but also form the basis of many of the interview questions you may be asked
// while job hunting.Let 's get some more practice with recursion in JavaScript!

// Instructions
// Write the following functions:

//     range(start, end) - receives a start and end value, returns an array from start up to end
// sumRec(arr) - receives an array of numbers and recursively sums them
// exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent(base ^ exp)

// write two versions: #this is math, not Ruby methods.

// # version 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

// # recursion 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2[
//     for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2)[
//     for odd n]
// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers

// deepDup(arr) - deep dup of an Array!💡Aside: type - checking in javascript
// Type checking in JS can get a very strange at times.There 's a typeof operator and and an instanceof operator. For our purposes, we need to use the instanceof operator.

// bsearch(arr, target) - receives a sorted array, returns the index of the target or - 1
// if not found💡 Another aside: Why - 1 ?
//     In
// case you are wondering, returning - 1 is a common practice when returning the index of an element that does not exist.The reasoning behind this is to
// return the same type(-1 is also a number) as
// if the element was found;
// that way we can still bracket into the array, but will get undefined back.Though this was not the
// case with Ruby, you will likely see this in other programming languages.Try this on your own
// if you are curious.

// mergesort(arr) - receives an array, returns a sorted copy of the array by implementing merge sort sorting algorithm
// subsets(arr) - receives an array, returns an array containing all the subsets of the original array
// Recap
// As you may have noticed, recursion works much the same in JavaScript as in Ruby.Yay!