import React from 'react';
import {Card} from 'react-bootstrap';

function Detail(props) {
  return (
    <div>
        <Card className='shadow'>
            <Card.Img variant="top" src={props.img} className='images' alt='gallery-photo'/>
        </Card>
    </div>
  )
}

export default Detail