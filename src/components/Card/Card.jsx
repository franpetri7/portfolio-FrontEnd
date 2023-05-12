import React from 'react';
import style from './Card.module.css';
import {Link} from 'react-router-dom'
import {addFav,removeFav } from '../../redux/actions'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'


const Card = ({id,name,status,gender,origin,species,image,onClose,addFav,removeFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({id,name,status,gender,origin,species,image,onClose});
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.card}> 
         <div className={style.container}>
            <div className={style.favorite}>
            {
               isFav ? (
                  <button className={style.button_2} onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className={style.button_2} onClick={handleFavorite}>🤍</button>
                     )
                  }
            <button className={style.Button} onClick={()=> {onClose(id)}}>✖</button>
            </div>
                  <div className={style.imgbx}>
                     <Link to={`/detail/${id}`}>
                        <img src={image} alt="" />
                     </Link>
               </div>
               <h2 className={style.name}>{name}</h2>
               <h3>Species:{species}</h3>
               <h4>Gender:{gender}</h4>
               <h5>Origin:{origin}</h5>
            <div className={style.status}>{status}</div> 
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)



