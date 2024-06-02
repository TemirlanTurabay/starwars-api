import React, { useState } from 'react';
import StarWarsLogoSVG from '../assets/star-wars.svg';
import IconSearchSVG from '../assets/icon-search.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const executeSearch = (event) => {
    if (event.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header className='header'>
      <div className='links-layout'></div>
      <img src={StarWarsLogoSVG} />
      <div className='search-layout'>
        <img src={IconSearchSVG} className='search-icon' />
        <input
          placeholder='Search Star Wars'
          type='text'
          value={searchQuery}
          onChange={handleSearch}
          onKeyDown={executeSearch}
        />
      </div>
      <Link to='/planets'>
        <button>Planets</button>
      </Link>
      <Link to='/characters'>
        <button>Characters</button>
      </Link>
      <Link to='/starships'>
        <button>Starships</button>
      </Link>
    </header>
  );
};
