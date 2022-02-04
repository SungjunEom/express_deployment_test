import React from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';

export default function Home() {
  return (
    <div className="Home">
      <div className="home-content">
        <section id="takeover">
            <div style={{color:"white",filter:"brightness(100%)"}}><h1>테스트</h1></div>
        </section>
        <section className="p-strip">
            test
        </section>
        <section className="p-strip--light">
            test2
        </section>
      </div>
    </div>
  );
}
