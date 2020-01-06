import React from 'react';

const DisplayCard = (props) => {
  const { Title, Year, Type, Poster } = props.movieInfo;
  return (
    <div className="display-card-container">
      <img src={Poster} width="200" className="movie-poster"/>
      <h3>{Title}</h3>
      <p>{Year}</p>
    </div>
  )
}

export default DisplayCard;