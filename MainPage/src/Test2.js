import React, { useState,useEffect } from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';
import SquareImageButton from './SquareImageButton.js';
import axios from 'axios';
import SERVER_ADDR from './SERVER_ADDR.js';

export default function Test2() {
  const [data, setData] = useState(null);
  let output = null;
  useEffect(async() => {
    await axios.get('/api/goods/Pokemons')
    .then((res) => {
      console.log('res: ',res.data);
      setData(res.data);
    })
  },[])
  useEffect(() => {
    console.log(data);
    if(data != null) {
      output = data.data.map((elem) => {
        return <SquareImageButton width="100%" height="100%" value="" imageSource={'images/'+elem.ImageSource} />;
      })
      console.log(output[0]);
      console.log(data.data[0].ImageSource);
      output =<div className="product-content">{output}</div>;
    }
  },[data]);

  return (<div className="product-content">
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} />
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
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