1. What is a class?
    A class is way to create an object.
    We have methods in the classes, that interact with other classes.

2. What is self?
    self inside a instance method refers to the current object instance.
    self used in a class method refers to the class itself.

3. What is the use of super?
    super is used when you have a class inheriting from a parent class.
    instead of rewriting code inside a method that already exists in the parent
    class, you can use super to basically call that method from the parent class.

4. Jukebox - design jukebox using oop
    
    - is the jukebox physical or virtual
    - does the jukebox accept currency

class JukeBox

    attr_reader :playlist

    def initialize(album, playlist)
        @album = album
        @playlist = playlist
    end

    def play 
        @playlist.queue.first
        @playlist.pop
    end

end

class Playlist

    attr_reader :queue

    def initialize
        @queue = []
    end

    def add(music)
        @queue.push(music)
    end

    def pop
        @queue.shift
    end
end


5. implement BFS

class Node
    
    def bfs(&proc) # uses a queue, value attr_reader

        queue = [self]

        until queue.empty?
            current_node = queue.shift
            if proc.call(current_node.value)
                return current_node
            end
            queue.concat(current_node.children)
        end

        nil
    end

end