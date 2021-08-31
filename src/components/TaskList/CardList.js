import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ImageExp from '../../static/img/bg_example.png';

export default function CardList(props) {

  function viewList(listid){
    localStorage.setItem('listid',listid);
    window.location.href = '/dashboard';
  }

  return(
  	<Card style={{ width: '18rem' }} bg={props.bg} text={props.textcolor}>
          <Card.Img variant="top" src={(props.srcimg!==null&&props.srcimg!=='  ')?props.srcimg:ImageExp} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant={props.bg==='light'?'primary':'light'} onClick={() => viewList(props.listid)}>Voir les tâches</Button>
          </Card.Body>
        </Card>
  	);
}