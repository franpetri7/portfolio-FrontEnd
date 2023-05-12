import SearchBar from "../SearchBar/SearchBar"
import style from "../NavBar/NavBar.module.css"
import {NavLink} from "react-router-dom"
import gifImage from '../../assets/sanchezr.gif'

// const NavBar = ({onSearch}) => {
//     return (
//         <div className={style.nav}>
//             <Link to="/about">About</Link>
//             <Link to="/home">Home</Link>
//             <SearchBar onSearch={onSearch}/>
//         </div>
//     )
// }

const NavBar = ({ setCharacters }) => {
    return (
      <div>
        <div className={style.nav}>
        <NavLink to="/home" className={style.navLink}>
          <img src={gifImage} alt="" />
        </NavLink>
        <NavLink to="/about" className={style.navLink}>
          About
        </NavLink>
        <NavLink to="/favorites"className={style.navLink}>
          Favorites
        </NavLink>
        <NavLink to="/rick"className={style.navLink}>
          XX
        </NavLink>
        <SearchBar setCharacters={setCharacters} />
        </div>
      </div>
    );
  };

export default NavBar;