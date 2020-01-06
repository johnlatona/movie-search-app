import { START_LOADING, END_LOADING, FETCH_MOVIES, FETCH_MOVIES_ERROR } from './constants';

const reducer = (state, action) => {
  switch(action.type) {
    case START_LOADING: {
      return { ...state, isLoading: true };
    }
    case END_LOADING: {
      return { ...state, isLoading: false};
    }
    case FETCH_MOVIES: {
      console.log( { ...state, movies: action.data });
      return { ...state, movies: action.data }
    }
    case FETCH_MOVIES_ERROR: {
      return { ...state, 
        error: {
          message: action.payload.message,
          err: action.payload.err,
        } 
      }
    }
  }
}

export default reducer;