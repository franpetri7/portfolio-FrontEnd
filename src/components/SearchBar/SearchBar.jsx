import style from './SearchBar.module.css';
import {useState} from 'react';
import axios from 'axios';


const SearchBar = ({setCharacters}) => {
   const [id, setId] = useState('');

   async function onSearch(e, id) {
      e.preventDefault()
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacters((oldChars) => [...oldChars, result.data]);
    }

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.SearchBar_container} >
         <form className={style.SearchBar}>
         <input type='search' onChange={handleChange} value={id} placeholder='Escribe aqui..'/>
         <button onClick={(e)=>onSearch(e, id)}>Agregar</button>
         </form>
      </div>
   );
};


export default SearchBar;
