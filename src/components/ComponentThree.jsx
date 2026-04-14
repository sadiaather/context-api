import { GlobalContext } from '../Context';
import { useContext } from "react";
import React from 'react'

const Coponentthree = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let handleClick= ()=>{
 dispatch({
  type : "CHANGE_NAME",
  payload :"Shazmeen"
 })
  }
  let handleChange= ()=>{
     dispatch({
  type : "CHANGE_NAME",
  payload :"ishmal"
 })
  }
  return (
    <div><h1>component three</h1>

      <h1>{state.name}</h1>
      <button onClick={handleClick}>click</button>
      <button onClick={handleChange}>change</button>
    </div>
  )
}

export default Coponentthree