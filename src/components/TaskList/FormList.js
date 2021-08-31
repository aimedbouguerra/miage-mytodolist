import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Form, Col } from 'react-bootstrap';
import FormFile from 'react-bootstrap/FormFile';
import Jumbotron from 'react-bootstrap/Jumbotron'

function FormList(props) {
  const [title, setTitle] = useState('');
  const [bg, setBg] = useState('');
  const [srcimg, setSrcimg] = useState(null);
  const [description, setDescription] = useState('');

  function handleChange(e) {
    if(e.target.id==='title'){
      setTitle(e.target.value);
    }else if(e.target.id==='description'){
      setDescription(e.target.value);
    }else if(e.target.id==='bg'){
      setBg(e.target.value);
    }else if(e.target.id==='listimage'){
      setSrcimg(e.target.value);
    } 
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addList(title,bg,srcimg,description);
    setTitle("");
    setBg("");
    setSrcimg(null);
    setDescription("");
  }
  
  return (
    <Jumbotron>
      <h1>Voulez-vous ajouter une liste de tâches ?</h1>
      <p>Pour créer une nouvelle liste, saisissez un titre, une description et choisissez une couleur :</p>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Label>Titre</Form.Label>
            <Form.Control 
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={handleChange}
              placeholder="Titre de ma liste"
             />
            </Col>
            <Col>
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text"
                id="description"
                value={description}
                onChange={handleChange}
                placeholder="Description de ma liste"
               />
              </Col>
              <Col>
                <Form.Group onChange={handleChange} >
                  <Form.Label>Couleur de la liste</Form.Label>
                  <Form.Control as="select" id="bg" className="input input__lg">
                    <option value='primary'>Bleu</option>
                    <option value='secondary'>Gris</option>
                    <option value='success'>Vert</option>
                    <option value='danger'>Rouge</option>
                    <option value='warning'>Jaune</option>
                    <option value='info'>Cyan</option>
                    <option value='light'>Blanc</option>
                    <option value='dark'>Noir</option>
                  </Form.Control>
                </Form.Group>
              </Col>
        </Form.Row>
        <Form.Row>
          <Col xs={10}>
            <FormFile>
              <Form.File id="listimage" label="Importer une image" onChange={handleChange}/>
            </FormFile>
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Ajouter une nouvelle liste
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Jumbotron>
  );
}

export default FormList;