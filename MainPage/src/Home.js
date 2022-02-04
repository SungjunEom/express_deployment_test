import React from 'react';
// import './App.css';
import {Outlet, Link} from "react-router-dom";
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';

function test() {
  console.log("test");
}
function test2() {
  window.location.replace('http://www.google.com');
}
export default function Home() {
  return (
    <div className="Home">
      <div className="head">
        <h1 className="site-headline">TEST WEBPAGE</h1>
        <div className="menu">
          <Link to = "/"><BoldTextButton width="50px" height="50px" value="HOME" onClick={test} /></Link>
          <BoldTextButton width="70px" height="50px" value="GOOGLE" onClick={test2} />
          <Link to ="/ButtonParty"><BoldTextButton width="70px" height="50px" value="BUTTONS TEST" onClick={test} /></Link>
          <BoldTextButton width="50px" height="50px" value="TEST2" onClick={test} />
          <Link to ="/ContactUs"><BoldTextButton width="130px" height="50px" value="CONTACT US" onClick={test} /></Link>
        </div>
      </div>
      <Outlet />
      <div className="home-content">
        <img src="images/01.jpg" style={{filter:"brightness(50%)"}}/>
        <div style={{position:"absolute",color:"white"}}><h1>테스트</h1></div>
        <section class="p-strip">
            test
        </section>
        <section class="p-strip--light">
            test2
        </section>
      </div>
    </div>
  );
}
