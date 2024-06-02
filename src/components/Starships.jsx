import React, { useState, useEffect } from 'react';

export const Starships = ({ searchQuery }) => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      setFilteredStarships(
        starships.filter(starship => starship.name.toLowerCase().includes(lowercasedQuery))
      );
    } else {
      setFilteredStarships(starships);
    }
  }, [searchQuery, starships]);

  // Helper function to extract ID from URL
  const getStarshipId = (url) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <div className='item-list-layout'>
      {filteredStarships.map((starship) => (
        <div key={starship.name} className='item'>
          <div>
            <p>name: {starship.name}</p>
          </div>
          <div className='item-image-layout'>
            <img
              className='item-image'
              src={`https://starwars-visualguide.com/assets/img/starships/${getStarshipId(starship.url)}.jpg`}
              alt={starship.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
