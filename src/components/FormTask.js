import React, { useState } from "react";
import {Jumbotron, Button, Form, Col} from 'react-bootstrap';

function FormTask(props) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  
  return (
    <Jumbotron>
      <h1>Voulez-vous ajouter une tâche ?</h1>
      <p>Pour créer une nouvelle tâche, saisissez un nom :</p>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col xs={4}>
          <Form.Label>Nom de la tâche</Form.Label>
            <Form.Control 
              type="text"
              id="new-todo-input"
              name="text"
              autoComplete="off"
              value={name}
              onChange={handleChange}
              placeholder="Ma tâche à faire"
            />
        </Col>
        <Col md={{ span: 3, offset: 5 }}>
        <Button type="submit" variant="primary">
          Ajouter une nouvelle tâche
        </Button>
        </Col>
        </Form.Row>
          
      </Form>
    </Jumbotron>
  );
}

export default FormTask;