import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Planets } from './Planets';
import { Characters } from './Characters';
import { Starships } from './Starships';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const SearchResults = () => {
  const query = useQuery().get('query');
  const [searchQuery, setSearchQuery] = useState(query || '');

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  return (
    <div>
      <h1 style={{ color: 'white' }}>Search Results for "{searchQuery}"</h1>
      <Planets searchQuery={searchQuery} />
      <Characters searchQuery={searchQuery} />
      <Starships searchQuery={searchQuery} />
    </div>
  );
};
