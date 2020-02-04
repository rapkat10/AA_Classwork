// Phase 5: Create a Cat Class
// Overview
// ES5 class syntax is very different from Ruby.Here we will be creating a Cat class via a constructor
// function and adding instance variables by building out Cat.prototype.This syntax may seem very strange, but it fit quite nicely into the "Everything is an object"
// model.

// Instructions
// Define a Cat class
// The constructor
// function should take a name and owner and store them in the instance
// Write Cat.prototype.cuteStatement method that returns "[owner] loves [name]"
// cuteStatement should be defined on the prototype
// Prototypes example:
//     Create several Cat instances, test out their cuteStatement method
// Reassign the Cat.prototype.cuteStatement method with a
// function that returns "Everyone loves [name]!"
// Invoke the cuteStatement method on your old cats;
// the new method should be invoked
// Add a meow method to the Cat class You can now call meow on your previously constructed Cat instances
// Take one of your cats and set the meow property on the instance(cat1.meow = function () {
//             ...
//         }.Call meow on this Cat instance; call meow on any other cat.The other cats should
//         continue to use the prototype method.
//         Recap We have used the new keyword and added methods to the prototype.We have explored how classes instances are really just objects that are able to behave like a class by maintaining a reference to their prototype.Note that it is unusual to add a method directly to an instance, but is important to note that methods defined on the instance override those defined on the prototype.