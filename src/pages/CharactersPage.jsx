import React, { useEffect, useState } from 'react';
import '../assets/styles/pages/CharactersPage.css'

const CharactersPage = () => {
  const API = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(API)
    .then(data => data.json())
    .then(data => setCharacters(data.results))
  }, [])
  return (
    <div>
      {
        characters && 
        characters.map(i => (
          <h1 className='chars-title'>{i.name}</h1>
        ))
      }
    </div>
  );
};

export default CharactersPage;