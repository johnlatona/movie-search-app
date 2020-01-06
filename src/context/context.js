import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';
import { START_LOADING, END_LOADING, FETCH_MOVIES, FETCH_MOVIES_ERROR } from './constants';
import { apiKey } from '../secrets';
import reducer from './reducer';

export const MovieState = createContext();
export const MovieDispatch = createContext();

const initialState = {
  isLoading: false,
  movies: {
    data: {
      Search: [],
    },
  },
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MovieState.Provider value={state}>
      <MovieDispatch.Provider value={dispatch}>
        {children}
      </MovieDispatch.Provider>
    </MovieState.Provider>
  )
}

// export const useMovieState = () => {
//   const context = useContext(MovieState);
//   if (context === undefined) {
//     throw new Error('useMovieState must be used within a MovieProvider');
//   }
//   return context;
// }

// export const useMovieDispatch = () => {
//   const context = useContext(MovieDispatch);
//   if (context === undefined) {
//     throw new Error('useMovieDispatch must be used within a MovieProvider');
//   }
//   return context;
// }

export const fetchMovies = async (dispatch, title, page, year, type) => {
  dispatch({
    type: START_LOADING,
  });
  const urlEncodedTitle = title.split(' ').join('%20');
  let url=`https://movie-database-imbd-alternative.p.rapidapi.com/?s=${urlEncodedTitle}&r=json`;
  if (page) {
    url += `&page=${page}`;
  }
  if (year) {
    url += `&y=${year}`;
  }
  if (type) {
    url += `&type=${type}`;
  }
  try {
    const data = await axios.get(url, {
      headers: {
        'X-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
      }
    });
    dispatch({
      type: FETCH_MOVIES,
      data,
    });
    dispatch({
      type: END_LOADING,
    });
  } catch(err) {
    const message = err.message || 'Internal Server Error - 500';
    console.error(message, err, err.stack);
    dispatch({
      type: FETCH_MOVIES_ERROR,
      payload: {
        message,
        err
      },
    })
  }
}

