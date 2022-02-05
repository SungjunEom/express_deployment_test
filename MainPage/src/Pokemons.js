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
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('/api/goods/Pokemons')
    .then((res)=>{
      console.log('res.data.data: '+res.data.data);
      this.setState({
        data: res.data.data
      },() => {console.log('this.state.data: '+this.state.data)});
    })
    .catch((err) => {
      console.log('안되네');
    })
    let pokemonsList = this.state.data.map((elem) => {
      return <SquareImageButton width="100%" height="100%" value="" imageSource={'images/'+elem.ImageSource} />;
    })
    this.setState({
      imgsrc: pokemonsList
    });
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