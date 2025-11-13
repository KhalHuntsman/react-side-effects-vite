import React from 'react';

// Displays the joke or a loading indicator based on props
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Shows "Loading..." until the API finishes */}
      {/* When not loading, displays the current joke text */}
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
    </div>
  );
}

export default JokeDisplay;
