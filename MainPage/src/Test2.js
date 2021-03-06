import React, { useState,useEffect } from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';
import SquareImageButton from './SquareImageButton.js';
import axios from 'axios';
import SERVER_ADDR from './SERVER_ADDR.js';

function gotoTest(name) {
  window.location.replace(`/Products/Details/Pokemons/${name}`);
}

export default function Test2() {
  const [data, setData] = useState(null);
  useEffect(async() => {
    await axios.get('/api/goods/Pokemons')
    .then((res) => {
      setData(res.data);
    })
  },[])

  return (<div className="product-content">
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} onClick={()=>{gotoTest("피카츄")}}/>
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/guiddol.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  </div>);
  //return (<>{output}</>);

}