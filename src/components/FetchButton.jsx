import React from 'react';

// Button component that triggers a new joke fetch when clicked
const FetchButton = ({ fetchJoke }) => {
  return (
    <button 
      className="fetch-button"
      onClick={fetchJoke} // calls the fetch function from props
    >
      Get a New Joke
    </button>
  );
}

export default FetchButton;
