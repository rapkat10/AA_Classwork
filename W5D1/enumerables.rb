class Array
    
    def my_each(&prc)

        i = 0
        while i < self.length
            ele = self[i]
            prc.call(ele)
        i += 1
        end
        self
    end

    def my_select(&prc)
        new_arr = []
        self.my_each do |el|
            if prc.call(el)
                new_arr << el
            end
        end
        # i = 0
        # while i < self.length
        #     if prc.call(self[i])
        #         new_arr << self[i]
        #     end
        # i += 1
        # end
        new_arr
    end

    def my_reject(&prc)
        new_arr = []
        self.my_each do |el|
            new_arr << el unless prc.call(el)
        end
        new_arr
    end

    def my_any?(&prc)
        self.my_each { |el| return true if prc.call(el) }
        false
    end

    def my_all?(&prc)
        self.my_each { |el| return false unless prc.call(el) }
        true
    end

    def my_flatten
        return self if !self.is_a?(Array)
        flattened = []
        self.each do |el|
            if !el.is_a?(Array)
                flattened << el
            else
                flattened.concat(el.my_flatten)
            end
        end
        flattened
    end

    def my_zip(*args)
        new_arr = Array.new(self.length) { Array.new(args.length + 1, nil) }
        result = []
        args.unshift(self)
        new_arr.each_with_index do |sub_arr, i|
            arr = []
            args.each_with_index do |arg, idx|
                arr << arg[0]
            end
            result << arr
            arr = []
        end
        # i = 0
        # while i < self.length
        #     j = 0
        #     while j < self.length
        #         new_arr[i][j] = args[i][j]
        #     j += 1
        #     end
        # i += 1
        # end

        # new_arr.each_with_index do |sub_arr, idx|
        #     args.each_with_index do |arg, i|
        #         sub_arr[i] = args[idx][i]
        #     end
        #  end
        
        result
    end

    def my_rotate(value = 1)
        
        value.abs.times do
            if value > 0
                ele = self.shift
                self.push(ele)
            else 
                el = self.pop
                self.unshift(el)
            end
        end
        self
        
    end

    def my_join(arg = '')
        str = ""
        self.each { |char| str += (char + arg) } 
        if str[-1] == arg
            str[0..-2]
        else
            str
        end
    end

    def my_reverse
        new_arr = []
        i = self.length - 1
        while i >= 0
            new_arr << self[i]
            i -= 1
        end
        new_arr
    end

end

# p nums = [1, 2, 3, 4].my_all? { |ele| ele > 1 }

# p [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten # => [1, 2, 3, 4, 5, 6, 7, 8]

# a = [ 4, 5, 6 ]
# b = [ 7, 8, 9 ]
# p [1, 2, 3].my_zip(a, b) # => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
# a.my_zip([1,2], [8])   # => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
# [1, 2].my_zip(a, b)    # => [[1, 4, 7], [2, 5, 8]]

a = [ "a", "b", "c", "d" ]
p a.my_rotate         #=> ["b", "c", "d", "a"]
# p a.my_rotate(2)      #=> ["c", "d", "a", "b"]
# p a.my_rotate(-3)     #=> ["b", "c", "d", "a"]
# p a.my_rotate(15)     #=> ["d", "a", "b", "c"]

# a = [ "a", "b", "c", "d" ]
# p a.my_join         # => "abcd"
# p a.my_join("$")    # => "a$b$c$d"

# p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
# p [ 1 ].my_reverse               #=> [1]



    