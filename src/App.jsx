import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import searchIcon from './search.svg';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const api_url = 'http://www.omdbapi.com?apikey=f6c0d6fd';

  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('');
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-semibold text-center mb-8">Movie Lander</h1>

      <div className="max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="w-full border border-gray-300 p-2 rounded-md pl-10"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
          className="absolute top-2 right-3 w-6 h-6 cursor-pointer"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
