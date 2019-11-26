
class Animal

    attr_accessor :name, :type
    def initialize(name, type)
        @name = name
        @type = type
    end

    def run 
        return "im running"
    end

end

class Cat < Animal

    def initialize(name, type)
        super
    end

    def run
        super
    end
end

cat1 = Cat.new("rap-cat", "bobcat")
cat1.name = "cody"
p cat1.name
p cat1.run
class Dog < Cat

    def initialize(name, type, age)
        super(name, type)
    end

    def run 
        super
    end

end

dog1 = Dog.new("jeff", "german sheppard", 10)
dog1.type = "pitbull"
p dog1.type
p dog1.run
