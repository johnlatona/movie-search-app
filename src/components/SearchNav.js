import React, { useContext, useState } from 'react';
import { MovieDispatch, fetchMovies } from '../context/context';

const SearchNav = () => {
  const [query, setQuery] = useState('');
  const dispatch = useContext(MovieDispatch);

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-default" 
            onClick={(e) => {
              e.preventDefault();
              fetchMovies(dispatch, query)
            }}>
              Submit
          </button>
        </form>
        </div>
      </div>
    </nav>
  )
}

export default SearchNav;