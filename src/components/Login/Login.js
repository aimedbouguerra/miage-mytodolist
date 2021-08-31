import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    window.location.href = '/TaskList';
  }

  return(
    <div className="todoapp stack-large">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor='login'>
            <p>Login</p>
            <input id='login' type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label htmlFor='passwd'>
            <p>Mot de passe</p>
            <input id='passwd' type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <label htmlFor='chkbox' label='Se souvenir de moi'>
            <p><input id='chkbox' type='checkbox'/>
            Se souvenir de moi</p>
          </label>
        </fieldset>
        <div>
          <Button className="btn toggle-btn" type="submit">Valider</Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}