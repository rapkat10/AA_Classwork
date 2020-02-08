Function.prototype.inherits = function (ParentClass){
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function Animal(name){
    this.name = name;
};

Animal.prototype.eat = function (food) {
    console.log(`${this.name} eats ${food}.`);
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.inherits(Animal);

function Cat(name) {
    Animal.call(this, name);
}

Cat.inherits(Animal);

const lola = new Dog("Lola");
const charlie = new Cat("Charlie");

lola.eat("steak");
charlie.eat("fish");