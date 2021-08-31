import React from "react";
import Button from 'react-bootstrap/Button';


function clearStorage(){
    localStorage.removeItem('token');
    window.location.href = '/';
  }

function clearToken() {
  

  return (
    <Button type="button" className="btn toggle-btn" variant="light" onClick={clearStorage}>
        <span>Se déconnecter</span>
    </Button>
  );
  
}

export default clearToken;