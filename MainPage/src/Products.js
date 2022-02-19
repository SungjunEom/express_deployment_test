import React from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';
import {Outlet, Link} from "react-router-dom";

export default function Products() {
  return (
    <div className="products-wrapper">
      <div style={{paddingTop:"50px"}}>
      <h1>PRODUCTS</h1>
      </div>
      <div style={{width:"80%", paddingBottom:"50px"}}><hr /></div>
      <div className="products">
        <div className="products-menu">
          <h3 style={{fontSize:"2rem"}}>We are selling now:</h3>
          <Link to="/Products/Pokemons"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Pokemons"/></div></Link>
          <Link to="/Products/Test2"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Pikachu"/></div></Link>
          <Link to="/Products/IT"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="IT"/></div></Link>
          <Link to="/Products/Pokemons"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Pokemons"/></div></Link>
          <Link to="/Products/Pokemons"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Pokemons"/></div></Link>
          <Link to="/Products/Pokemons"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Pokemons"/></div></Link>
          <Link to="/Products/Pokemons"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Pokemons"/></div></Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
