def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.

  # movie1 = [david, Charlie]
  # movie2 = [david, Paul]
  # movie3 = [david, charlie, paul] = 3 actors
  #those_actors = [David, charlie] = 2 actors
  #movie has only three actors and they equal name on each from those_actors

  Movie 
    .select(:title, :id)
    .joins(:actors)
    .where(actors: {name: those_actors}) #'actors.name IN ?'
    .group(:id)
    .having('COUNT(actors.id) >= ?', those_actors.length)

end

def golden_age
  # Find the decade with the highest average movie score.

  Movie
    .select('(yr / 10) * 10 AS decade') #1997 / 10 = 199 * 10 = 1990 AS decade
    .group('decade')
    .order('AVG(score) DESC')
    .first
    .decade

    #original table:
#
    #movie1 -> 1991
    #movie2 -> 1993
    #movie3 -> 1987
    #movie4 -> 1977
    #movie5 -> 1971
#
    #after group by decade
#
    #1990 -> movie1, movie2
    #1980 -> movie3
    #1970 -> movie4, movie5
end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery

  # movie1 [david, charlie]
  # movie2 [david, paul]
  #costars(david)
  #subquery = movie1, movie2


  subquery = Movie
              .select(:id)
              .joins(:actors)
              .where(actors: {name: name})
  
  Actor
    .joins(:movies)
    .where(movies: {id: subquery})
    .where.not(actors: {name: name})
    .distinct
    .pluck(:name)

end

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie

  Actor
    .select(:name)
    .left_outer_joins(:castings)
    .where(castings: {ord: nil})
    .count

end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"

  actor_name = whazzername.split('').join('%')

  # .select('*')
  Movie
    .select('movies.*')
    .joins(:actors)
    .where('UPPER(actors.name) LIKE ?', "%#{actor_name.upcase}%")
    # .distinct.pluck(:title)

    # Sylvester Stallone   actors.name Like %"tall"%
end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.

  Actor
    .select(:id, :name, 'MAX(movies.yr) - MIN(movies.yr) AS career')
    .joins(:movies)
    .group('actors.id')
    .order('career DESC, actors.name')
    .limit(3)

end
