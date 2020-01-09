class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    key_hash = key.hash 
    unless self.include?(key_hash)
      self[key_hash].push(key_hash)
      @count += 1
      if @count == num_buckets
        resize!
      end
    end
  end

  def include?(key)
    key_hash = key.hash
    return self[key_hash].include?(key_hash)
  end

  def remove(key)
    key_hash = key.hash
    if self.include?(key)
      self[key_hash].delete(key_hash)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def []=(num, value)
    @store[num % num_buckets] = value
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store
    @store = Array.new(num_buckets * 2){[]}
    @count = 0 

    old_store.each do |subarr|
      subarr.each do |ele|
        self.insert(ele)
      end
    end
    @store
  end
end
