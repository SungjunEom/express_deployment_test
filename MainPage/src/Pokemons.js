import React from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';
import SquareImageButton from './SquareImageButton.js';
import axios from 'axios';
import SERVER_ADDR from './SERVER_ADDR.js';

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    var temp = null;
    var pokemonsList = null;
    axios.get('/api/goods/Pokemons')
    .then((res)=>{
      temp = res.data.data;
      pokemonsList = temp.map((elem) => {
        return <SquareImageButton width="100%" height="100%" value="" imageSource={'images/'+elem.ImageSource} />;
      })
      console.log(pokemonsList);
      this.state = {
        data: temp,
        imgsrc: pokemonsList
      };
    })
    .catch((err) => {
      console.log('안되네');
    })
  }

  componentDidMount() {
    
  }

  render() {
  
  return (
    <div className="product-content">
        {this.state.imgsrc}
    </div>
  );
  }
}

export default Pokemons;