import React from 'react';
import'./Services.css';
import {Card} from 'react-bootstrap';


function Data(props) {
  return (
    <div>
      <Card className='shadow'>
        <Card.Img variant="top" src={props.img} className='images'/>
        <Card.Body>
          <Card.Title className='title'>{props.title}</Card.Title>
        </Card.Body>
      </Card>

    </div>   
  )
}

export default Data;