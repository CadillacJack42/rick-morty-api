import React, { useState, useEffect } from 'react';

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
          console.log(character);
          return (
            <article key={character.id + character.name}>
              <h3>{character.name}</h3>
              <p>Species: {character.species}</p>
            </article>
          );
        })
      )}
    </>
  );
}
