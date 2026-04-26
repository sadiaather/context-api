import { GlobalContext } from '../Context';
 import { useContext } from "react";
 import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css"
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  let { state, dispatch } = useContext(GlobalContext);
  let handleClick = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: "Shazmeen"
    })
  }
  let handleChange = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: "ishmal"
    })
     let picChange = () => {
    dispatch({
      type: "CHANGE_IMG",
      
    })}
  }
  return (
    <CardGroup className='container-fluid cards'>
      <Card>
        <Card.Img  variant="top" src="https://i.pinimg.com/736x/a8/b5/a7/a8b5a7c128be55a7b4699fe83f9fb3cd.jpg"/>
         <Card.Body>
          <Card.Title>{state.name}</Card.Title>
          <Card.Text>
            using context api change k value by click a button
          </Card.Text>
        </Card.Body>
        
           <div className='but' >
           <Button  variant="danger" onClick={handleClick}>click </Button>
           <Button variant="danger" onClick={handleChange}>click</Button>
         </div>
   
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/a8/b5/a7/a8b5a7c128be55a7b4699fe83f9fb3cd.jpg" />
        <Card.Body>
          <Card.Title>{state.name}</Card.Title>
          <Card.Text>
          using context api change k value by click a button
          </Card.Text>
        </Card.Body>
        
            <div className='but' >
           <Button variant="danger" onClick={handleClick}>click </Button>
           <Button variant="danger" onClick={handleChange}>click</Button>
         </div>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/a8/b5/a7/a8b5a7c128be55a7b4699fe83f9fb3cd.jpg" />
        <Card.Body>
          <Card.Title>{state.name}</Card.Title>
          <Card.Text>
           using context api change k value by click a button
          </Card.Text>
        </Card.Body>
        
            <div className='but' >
           <Button variant="danger" onClick={handleClick}>click </Button>
           <Button variant="danger" onClick={handleChange}>click</Button>
         </div>

  
      </Card>
    </CardGroup>
  );
}

export default Cards;