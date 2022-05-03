import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailView() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const json = await details.json();
      setCharacter(json);
      setLoading(false);
    };
    fetchDetails();
  }, []);
  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h3>{character.name}</h3>
          <img alt={`Image of ${character.name}`} src={character.image}></img>
        </div>
      )}
    </>
  );
}
