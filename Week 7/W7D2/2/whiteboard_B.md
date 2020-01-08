1. What is an Object?
An object is the subject that you're working with. In terms of OOP an example
would be a Node from a tree or a Jukebox for a jukebox class. So if we are in
the jukebox class the boject would be self which is an instance of the jukebox

2. Explain this ruby idiom: `a ||= b`
So this ruby idiom would be or equal thing if a is given it would be a if a isnt
given it would be b
EX. prc ||= Proc.new { |a, b| a <=> b }

3. What is unit testing? What is the primary technique when writing a test?
Unit testing is when you test a spec based on a single independent scenario.
You would use unit testing to test if a certain scenario can be passed
regaurdless of passing other specs.

4. Parking lot
### OOP – Parking Lot

### Prompt

Design a parking lot using object-oriented principles.

(Don't spend too much time fleshing out actual methods. Aim to give a holistic
view of which methods exist on each of the classes.)

- Each parking lot can have many floors.
- Each parking lot allows for various kinds of vehicles to park. Assume these
  are motorcycle, car, and bus. Each of these has a different size.
- There are multiple parking spot sizes. Assume those sizes are compact and
  regular.
- The rules for parking a vehicle in a spot are something like this:
  - Motorcycles can take any parking spot, whether regular or compact. (They
    require, say, four feet of parking space.)
  - Cars can take any regular spot. (They require, say, an eight foot wide
    spot.)
  - Buses require, say, forty feet of parking space, so they will have to take
    multiple spaces.

class ParkingLot
  def initialize
    @floors = []
  end

  def park(vehicle)

  end
end

class Floors
  def initialize(spaces, floor_number)
    @spaces = spaces
    @floor_number = floor_number
  end

  def empty_spaces?

  end

  def spot_number

  end
end

class ParkingSpot
  def initialize(space_size, spot_number, floor_number, row)
    @space_size = space_size
    @row = row
    @floor_number = floor_number
    @spot_number = spot_number
  end
end

class Car
  def initialize
    @car = car
  end
end

class Motorcycle
  def initialize

  end
end

class Bus
  def initialize

  end
end

5. DFS Takes proc # Stack LIFO
[2, 3]
     1
  2     3
4  5    6
      7   8 


# -- Assume nodes have a value, and a attr_reader on value
  # -- Also, assume there are working parent/child-related methods for Node

class Node
  def dfs(&prc)
    return self if prc.call(self)

    self.child_node.each do |child|
      current_node = child.dfs(&prc)
      return current_node if current_node
    end
    
    nil
  end
end