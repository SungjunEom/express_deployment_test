import React from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';
import {Outlet, Link} from "react-router-dom";

export default function Products() {
  return (
    <div className="products">
      <div className="products-menu">
        <h3 style={{fontSize:"2rem"}}>We are selling now:</h3>
        <Link to="/Products/Books"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Books"/></div></Link>
        <Link to="/Products/Books"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Books"/></div></Link>
        <Link to="/Products/Books"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Books"/></div></Link>
        <Link to="/Products/Books"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Books"/></div></Link>
        <Link to="/Products/Books"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Books"/></div></Link>
        <Link to="/Products/Books"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Books"/></div></Link>
        <Link to="/Products/Books"><div style={{paddingTop:".1rem",paddingBottom:".1rem"}}><BlackRoundButton width="10rem" height="2rem" value="Books"/></div></Link>
      </div>
      <Outlet />
    </div>
  );
}