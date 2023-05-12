import { connect } from 'react-redux';
import Card from '../Card/Card';
import style from '../Favorites/Favorites.module.css'
import image from '../../assets/rickface.png';
import {useDispatch} from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions';
import {useState} from 'react'

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false)

  const dispatch = useDispatch()

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  if (myFavorites.length === 0) {
    return  <div className={style.container}>
                <img src={image} alt="" />
                <p>No tienes personajes favoritos!</p>
            </div>
  } else 
      {
    return (
      <div className={style.options}>
        <div className={style.options2}>
          <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>

          <select onChange={handleFilter}>
            <option value="Male">Hombre</option>
            <option value="Female">Mujer</option>
            <option value="Genderless">Sin genero</option>
            <option value="unknown">desconocido</option>
          </select>
        </div>
        {myFavorites.map(({ id, name, status, gender, origin, species, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              gender={gender}
              origin={origin}
              species={species}
              image={image}
            />
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

export default connect(mapStateToProps, null)(Favorites);
