import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListView() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterList = await fetch(
        'https://rickandmortyapi.com/api/character'
      );
      const json = await characterList.json();
      setList(json.results);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        list.map((character) => {
          return (
            <article key={character.id + character.name}>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
              <p>Species: {character.species}</p>
            </article>
          );
        })
      )}
    </>
  );
}
