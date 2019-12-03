#Question 1
#merge, proc
#Write a new `Array#merge_sort` method that takes in a proc; it should not modify the array it is called on, but create a new sorted array. 
```ruby
class Array
    def merge_sort(&proc) # 
        proc ||= Proc.new { |num_1, num_2| num_1 <=> num_2 }
        return self if self.length < 2
        new_arr = self.dup
        mid_index = new_arr.length / 2
        left = new_arr.take(mid_index).merge_sort(&proc) 
        right = new_arr.drop(mid_index).merge_sort(&proc)
        Array.merge(left, right, &proc)
    end

    def self.merge(left, right, &proc) # [4, 1, 2, 8]  [3, 9, 5, 7]

        sorted = []
        until left.empty? || right.empty?
            if proc.call(left.first, right.first) == -1
                sorted << left.shift
            else
                sorted << right.shift
            end
        end
        sorted + left + right
    end
end
```
#question 2
#shuffled sentence detector 
### Shuffled Sentences

#This method returns true if the words in the string can be rearranged to form the
sentence passed as an argument. Words are separated by spaces. 
Example:

```ruby
#"cats are cool".shuffled_sentence_detector("dogs are cool") => false
#"cool cats are".shuffled_sentence_detector("cats are cool") => true
``` 
```ruby
class String
    def shuffled_sentence_detector(string)
        string_arr = string.split.sort
        self_arr = self.split.sort
	string_arr == self_arr
    end
end
```


#question 3
# my_reduce

#Write an array method that calls the given block on each element and
#combines each result one-by-one with a given accumulator. If no accumulator is given, the first element is used. 
```ruby
class Array
    def my_reduce(acc = nil, &prc)
        acc ? acc : (acc = self.shift)
        self.each do |el|
            acc = prc.call(acc, el)
        end
        acc
    end
end
```
