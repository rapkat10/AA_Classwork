def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.

  <<-SQL
    SELECT
      movies.title, movies.id
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actor.name IN (those_actors) 
    
  SQL

  Movie
    .select(:id, :title)
    .joins(:actors)
    .where(actors: {name: those_actors})
    .group(:id)
    .having('COUNT(actors.id) >= ?', those_actors.length)

end

def golden_age
  # Find the decade with the highest average movie score.
  <<-SQL

  SQL

  Movie
  .group('decade')
  .order('AVG(score) DESC')
  .limit(1)
  .pluck('((yr / 10) * 10) AS decade')
  .first
  # movie.first.decade
end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery

  <<-SQL
  select
    a2.name
  from
    actors a1
  join
    castings c1 on c1.actor_id = a1.id
  join
    movies m1 on m1.id = c1.movie_id
  join 
    castings c2 on c2.movie_id = m1.id
  join 
    actors a2 on a2.id = c2.actor_id
  where 
  a1.name = 'Humphrey Bogart' AND a2.name != 'Humphrey Bogart'
  order by
  a2.name ; 
  SQL

  ids = Movie
        .select(:id)
        .joins(:actors)
        .where(actors: {name: name})
  Actor
  .joins(:movies)
  .where(movies: {id: ids} )
  .where('actors.name != ?', name)
  .distinct
  .pluck(:name)
  

end

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie
<<-SQL
SELECT 
count(actors.id)
FROM
actors
LEFT JOIN 
castings ON castings.actor_id = actors.id
WHERE movie_id IS NULL;
SQL

Actor
.left_outer_joins(:castings)
.where('movie_id IS NULL')
.pluck('COUNT(actors.id)')
.first
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"

  <<-SQL
    SELECT
      movies.*
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name LIKE "%Sylvester Stallone%"
  SQL

    modified_name = whazzername.chars.map {|char| char + '%'}.join("")

    Movie.select('movies.*').joins(:actors).where("lower(actors.name) LIKE lower(?)", "%#{modified_name}%")
end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.

  <<-SQL
  select
    actors.id, actors.name, (MAX(movies.yr) - MIN(movies.yr)) AS length_careers
  from 
    actors
    join 
    castings on castings.actor_id = actors.id
    join
    movies on movies.id = castings.movie_id
  group by
    actors.id
  order by
    length_careers DESC,
    actors.name ASC
  limit
    3;
  SQL

  Actor
    .select(:id, :name, '(MAX(movies.yr) - MIN(movies.yr)) AS career')
    .joins(:movies)
    .group('actors.id')
    .order('career DESC, actors.name ASC')
    .limit(3)
  

end
