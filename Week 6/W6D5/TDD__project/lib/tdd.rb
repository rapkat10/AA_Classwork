
class Array

    def my_uniq
        new_arr = []
        self.each do |el|
            new_arr << el if !new_arr.include?(el)
        end
        new_arr
    end

    def two_sum
        pairs = self.combination(2).to_a
        zero_pairs = pairs.select { |pair| pair.sum === 0 }.sort
        zero_pairs.map { |pair| [self.index(pair.first), self.index(pair.last)] }
    end

    def my_transpose
        new_arr = Array.new(self.length) { Array.new(self.length) { Array.new } }
        self.each_with_index do |row, row_idx|
            row.each_with_index do |col, col_idx|
                new_arr[col_idx][row_idx] = self[row_idx][col_idx] 
            end
        end
        new_arr
    end

end

def stock_picker(prices)
    pairs = prices.combination(2).to_a
    result = []
    profitable = 0
    pairs.each do | pair |
        pair_profit = pair.reverse.inject { | acc, el | acc - el }
        profitable = pair_profit > profitable ? pair_profit : profitable
        result << pair if profitable == pair_profit
    end
    result.last
end