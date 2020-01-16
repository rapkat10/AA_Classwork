def eighties_b_movies
  # List all the movies from 1980-1989 with scores falling between
  # 3 and 5 (inclusive).
  # Show the id, title, year, and score.

  <<-SQL
    SELECT
      id, title, yr, score
    FROM
      movies
    WHERE
      (score BETWEEN 3 AND 5) AND (yr BETWEEN 1980 AND 1989);
  SQL

  Movie
    .select(:id, :title, :yr, :score)
    .where(score: (3..5))
    .where(yr: (1980..1989))

end

def bad_years
  # List the years in which a movie with a rating above 8 was not released.
  <<-SQL
    SELECT
      yr
    FROM
      movies
    GROUP BY
      yr
    HAVING 
      MAX(score) < 8;
  SQL

  Movie
    .group(:yr)
    .having('MAX(score) < 8')
    .pluck(:yr)

end

def cast_list(title)
  # List all the actors for a particular movie, given the title.
  # Sort the results by starring order (ord). Show the actor id and name.
  <<-SQL
  SELECT
    a1.id , a1.name, m1.title
  FROM
    actors a1
  JOIN
    castings c1 ON c1.actor_id = a1.id
  JOIN
    movies m1 ON c1.movie_id = m1.id
  WHERE
    m1.title = 'Star Wars'
  ORDER BY
    c1.ord ASC;
  SQL

  Actor
    .select(:id, :name)
    .joins(:movies)
    .where(movies: {title: title})
    .order('ord')
end

def vanity_projects
  # List the title of all movies in which the director also appeared
  # as the starring actor.
  # Show the movie id and title and director's name.

  # Note: Directors appear in the 'actors' table.

  <<-SQL
  SELECT
    movies.id, movies.title, actors.name
  FROM
    movies
  JOIN
    castings ON movies.id = castings.movie_id
  JOIN
    actors ON actors.id = castings.actor_id
  WHERE 
    castings.ord = 1 AND actor_id = director_id
  
  SQL

  Movie
    .select('movies.id, movies.title, actors.name')
    .joins(:actors)
    .where('castings.ord = 1')
    .where('actor_id = director_id')
end

def most_supportive
  # Find the two actors with the largest number of non-starring roles.
  # Show each actor's id, name and number of supporting roles.

  <<-SQL
    SELECT
      actors.id, actors.name, COUNT(ord) as roles
    FROM 
      actors
    JOIN
      castings ON castings.actor_id = actors.id
    WHERE
      castings.ord != 1
    GROUP BY
      actors.id
    ORDER BY
      roles DESC
    LIMIT
      2;

  SQL

  Actor
    .select(:id, :name, 'COUNT(ord) AS roles')
    .joins(:castings)
    .where('ord != 1')
    .group(:id)
    .order('roles DESC')
    .limit(2)

end
