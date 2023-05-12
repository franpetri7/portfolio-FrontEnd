import { useState } from 'react';
import validation from "./validation";
import style from './Form.module.css'

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation(userData, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  }; 

  return (
    <form className={style.wrapper} onSubmit={submitHandler}>
      <span className={style.iconclose}>
      </span>
      <div className={style.flogin}>
        <h2>Login</h2>
        <div className={style.inputb}>
          <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
          <label htmlFor="username">Username:</label>
        </div>
        <div className={style.inputb}>
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
          <label htmlFor="password">Password:</label>
          <p>{errors.username}</p>
        </div>
        <div class={style.remember}>
          <label>
            <input type="checkbox" />
          Remember me
          </label>
        </div>
        <button className={style.btn}>Login</button>
      </div>
    </form>
  );
};

export default Form;
