class Movie < ApplicationRecord
  belongs_to :director,
    class_name: :Actor,
    foreign_key: :director_id,
    primary_key: :id

  has_many :castings,
    class_name: :Casting,
    foreign_key: :movie_id,
    primary_key: :id

  has_many :actors,
    through: :castings,
    source: :actor


  # def it_was_ok
  # # Consider the following:
  # #
  # # Movie.where(yr: 1970..1979)
  # #
  # # We can use ranges (a..b) inside a where method.
  # #
  # # Find the id, title, and score of all movies with scores between 2 and 3

  # # Movie
  #   # .select(:id, :title, :score)
  #   # .where('score BETWEEN 2 AND 3')

  # <<-SQL
  #   SELECT 
  #     movies.id, movies.title, movies.score
  #   FROM
  #     movies
  #   WHERE
  #     movies.score BETWEEN 2 AND 3;
  # SQL

  # Movie
  #   .select(:id, :title, :score)
  #   .where(score: (2..3))
  # def movies
  # Movie
  #   .select(:id, :title)
  #   .joins(:castings)
  #   .group('castings.movie_id')
  #   .order('COUNT(actor_id) DESC')
  #   .limit(3)
  # end
  
end
