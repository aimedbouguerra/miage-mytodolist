import React from "react";
import Button from 'react-bootstrap/Button';


function clearStorage(){
    localStorage.removeItem('token');
    window.location.href = '/';
  }

function clearToken() {
  

  return (
    <div className="todoapp stack-large">
      <Button type="button" className="btn toggle-btn" variant="light" onClick={clearStorage}>
          <span>Se déconnecter</span>
      </Button>
    </div>
  );
  
}

export default clearToken;