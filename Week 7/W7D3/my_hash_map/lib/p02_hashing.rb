class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    result = 1 
    self.each_with_index do |ele, i|
      ele_hash = ele.hash
      i_hash = i.hash
      num = ele_hash / i_hash
      result += num
      result *= ele_hash
    end
    result
  end
end

class String
  def hash
    result = 1 
    self.each_char.with_index do |char, i|
      char_hash = char.ord.hash
      i_hash = i.hash
      num = char_hash / i_hash
      result += num
      result *= char_hash
    end
    result
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
     result = 1 
    self.each do |k, v|
      k_hash = k.to_s.hash
      v_hash = v.hash
      dif = k_hash - v_hash
      dif_hash = dif.hash
      num = k_hash + v_hash
      result += (num + dif_hash)
    end
    result
  end
end
