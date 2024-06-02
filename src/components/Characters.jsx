import React, { useState, useEffect } from 'react';

export const Characters = ({ searchQuery }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      setFilteredCharacters(
        characters.filter(character => character.name.toLowerCase().includes(lowercasedQuery))
      );
    } else {
      setFilteredCharacters(characters);
    }
  }, [searchQuery, characters]);

  return (
    <div className='item-list-layout'>
      {filteredCharacters.map((character, index) => (
        <>
          <div>
            <p>name: {character.name}</p>
          </div>
          <div className='item-image-layout'>
            <img
              className='item-image'
              src={`https://starwars-visualguide.com/assets/img/characters/${
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

