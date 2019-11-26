# Execution Time Difference
# Learning Goals
# Be able to determine the time and space complexity of a method
# Be able to compare the time complexity of one method to another
# Be able to recognize when time or space complexity can be improved

# my_min
# Given a list of integers find the smallest number in the list.
# Phase I
def my_min(arr)
    arr.each do |element|
        return element if arr.all? {|ele| ele >= element}
    end
end

# Phase II
def my_min(arr)
    min = 0
    arr.each do |ele|
        min = ele if ele < min
    end
    min
end

# Example:

     list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5


# Phase I
# First, write a function that compares each element to every other 
# element of the list. Return the element if all other 
# elements in the array are larger.
# What is the time complexity for this function?

# Phase II
# Now rewrite the function to iterate through the list just once while 
# keeping track of the minimum. What is the time complexity?

# Largest Contiguous Sub-sum
# You have an array of integers and you want to find the largest contiguous 
# (together in sequence) sub-sum. Find the sums of 
# all contiguous sub-arrays and return the max.

# Example:

#     list = [5, 3, -7]
#     largest_contiguous_subsum(list) # => 8

#     # possible sub-sums
#     [5]           # => 5
#     [5, 3]        # => 8 --> we want this one
#     [5, 3, -7]    # => 1
#     [3]           # => 3
#     [3, -7]       # => -4
#     [-7]          # => -7
# Example 2:

#     list = [2, 3, -6, 7, -6, 7]
#     largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])
# Example 3:

#     list = [-5, -1, -3]
#     largest_contiguous_subsum(list) # => -1 (from [-1])

# def largest_contiguous_subsum(arr)
#     sum = 0
#     size = arr.length
#     (0..size - 1).each do |idx|
#         sub = []
#         (idx + 1..size).each do |idx_2|
#             sub = arr[idx..idx_2]
#             if sub.sum > sum 
#                 sum = sub.sum
#             end
#         end
#     end
#     sum
# end

 

# Phase I
# Write a function that iterates through the array and 
# finds all sub-arrays using nested loops. 
# First make an array to hold all sub-arrays. T
# hen find the sums of each sub-array and return the max.

# Discuss the time complexity of this solution.
def largest_contiguous_subsum(arr)
    largest_sum = arr.first
    sum = 0
    arr.each do |ele|
        sum += ele
        largest_sum = sum if sum > largest_sum
        sum = 0 if sum < 0
    end
    largest_sum
end

list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8
# Phase II
# Let's make a better version.
# rite a new function using O(n) time with O(1) memory. 
# Keep a running tally of the largest sum.