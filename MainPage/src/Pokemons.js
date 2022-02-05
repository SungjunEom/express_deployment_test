import React from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';
import SquareImageButton from './SquareImageButton.js';
import axios from 'axios';
import SERVER_ADDR from './SERVER_ADDR.js';

export default function Pokemons() {
  let data = null;
  axios.get('/api/goods/Pokemons')
  .then((res)=>{
    console.log(res.data.data[0].Name);
    data = res.data.data;
  })
  .catch((err) => {
    console.log('안되네');
  })
  console.log(data)
  return (
    <div className="product-content">
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/01.jpg"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        <SquareImageButton width="100%" height="100%" value="Test" imageSource="images/guiddol.png"/>
        
    </div>
  );
}
