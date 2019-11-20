
class PolyTreeNode

    attr_reader :value, :parent, :children
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        @parent.children.delete(self) if @parent
        @parent = node         
        if @parent
            node.children.push(self) unless node.children.include?(self)
        end
    end

    def add_child(node)
        node.parent=(self)
    end

    def remove_child(node)
        if !self.children.include?(node)
            raise "error" 
        else
            node.parent=(nil)
        end
    end

    def dfs(target)
        return self if self.value == target
        self.children.each do |child|
            result = child.dfs(target)
            return result unless result.nil?
        end
        nil
    end

    def bfs(target)
        queue = [self]
        until queue.length == 0
            node = queue.delete_at(0)
            return node if node.value == target
            node.children.each { |child| queue.push(child) }
        end
        nil
    end

end





    

    
