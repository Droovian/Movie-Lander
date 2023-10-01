import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 right-0 mb-2 mr-2 p-1 text-black bg-white rounded-full text-xs font-semibold">
          <span className="text-xs font-semibold">{movie.Type}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
