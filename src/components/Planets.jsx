import React, { useState, useEffect } from 'react';

export const Planets = ({ searchQuery }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/');
        const data = await response.json();
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      setFilteredPlanets(
        planets.filter(planet => planet.name.toLowerCase().includes(lowercasedQuery))
      );
    } else {
      setFilteredPlanets(planets);
    }
  }, [searchQuery, planets]);

  return (
    <div className='item-list-layout'>
      {filteredPlanets.map((planet, index) => (
        <>
          <div>
            <p>name: {planet.name}</p>
            <p>gravity: {planet.gravity}</p>
            <p>diameter: {planet.diameter}</p>
          </div>
          <div className='item-image-layout'>
            <img
              className='item-image'
              src={`https://starwars-visualguide.com/assets/img/planets/${
                index + 2
              }.jpg`}
              alt='planet'
            />
          </div>
        </>
      ))}
    </div>
  );
};
