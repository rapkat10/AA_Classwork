require_relative "Piece"

class Pawn < Piece

    attr_reader :symbol
    def initialize(color, board, pos)
        @color = color
        @symbol = @color == :black ? :♟ : :♙ # this is a guess!
        super
    end

  def move_dirs

  end

  private

  def add_start_row?

  end

  def forward_dir
    # returns 1 or -1
  end

  def forward_steps

  end

  def side_attacks

  end

end