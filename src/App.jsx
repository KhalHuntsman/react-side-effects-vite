import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Holds the current joke text
  const [joke, setJoke] = useState("Click here to get a joke")

  // Tracks whether the app is waiting for the API
  const [loading, setLoading] = useState(false)

  // Automatically fetches a joke when the component first loads
  useEffect(() => {
    fetchJoke()
  }, [])

  // Fetches a new programming joke from the external API
  function fetchJoke() {
    setLoading(true) // indicates loading has started

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => response.json()) // convert response to JSON
      .then(data => {
        setJoke(data.joke) // store the fetched joke in state
      })
      .catch(error => {
        console.error("error fetching:", error)
        setJoke("Failed to fetch a joke") // fallback message on error
      })
      .finally(() => {
        setLoading(false) // loading finished
      })
  }

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Displays the current joke or a loading message */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Button that triggers a new joke fetch */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
