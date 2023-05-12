import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from '../Detail/Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      {/* <button className={style.Button} onClick={() => onClose(parseInt(id))}>X</button> */}
      <h1>Detalle de {character.name}</h1>
      <div className={style.characterInfo}>
        {/* {character.name && <p>Nombre: {character.name}</p>} */}
        {character.status && <p>Estado: {character.status}</p>}
        {character.species && <p>Especie: {character.species}</p>}
        {character.gender && <p>Género: {character.gender}</p>}
        {character.origin && <p>Origen: {character.origin.name}</p>}
        {character.image && <img src={character.image} alt={character.name} />}
      </div>
    </div>
  );
};

export default Detail;
