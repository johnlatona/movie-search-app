import React, { useState, useContext, useEffect } from 'react';
import { MovieDispatch, MovieState, fetchMovies } from '../context/context';
import DisplayCard from './DisplayCard';

const SearchResults = () => {
  const [page, setPage] = useState(1);
  const dispatch = useContext(MovieDispatch);
  const state = useContext(MovieState);
  const movies = state.movies.data.Search

  useEffect(() => {
    console.log("MOUNTED");
    return () => {
      console.log("UNMOUNTED");
    }
  })

  return (
    <div className="results-container">
      {
        movies.map(movie => {
          console.log(movie);
          return <DisplayCard key={movie.imdbId} movieInfo={movie}/>
        })
      }
    </div>
  )
}

export default SearchResults;