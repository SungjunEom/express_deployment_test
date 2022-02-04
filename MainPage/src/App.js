import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import {Outlet, Link} from "react-router-dom";
import Home from './Home.js';
import ContactUs from './ContactUs.js';


function test() {
  console.log("test");
}
function test2() {
  window.location.replace('http://www.google.com');
}

export default function App() {
  return (
    <div className="App">
      <div className="head">
        <h1 className="site-headline">TEST WEBPAGE</h1>
        <div className="menu">
          <Link to = "/Home"><BoldTextButton width="50px" height="50px" value="HOME" onClick={test} /></Link>
          <BoldTextButton width="70px" height="50px" value="GOOGLE" onClick={test2} />
          <Link to ="/ButtonParty"><BoldTextButton width="70px" height="50px" value="BUTTONS TEST" onClick={test} /></Link>
          <BoldTextButton width="50px" height="50px" value="TEST2" onClick={test} />
          <Link to ="/ContactUs"><BoldTextButton width="130px" height="50px" value="CONTACT US" onClick={test} /></Link>
        </div>
      </div>
      <Outlet />
      <footer>
        <div className="footer-hr"><hr/></div>
        <div className="footer-content">
        <div style={{paddingTop:"6rem"}}>
          © 2022 Test Company.<br/></div>
          <div style={{paddingTop:"2.5rem"}}>
          Contact information Legal information Improve this site Projects Manage your tracker settings<br/></div>
          <div style={{paddingTop:"2.5rem",paddingBottom:"6rem"}}>          
          Test Webpage and Test Company are registered trademarks.<br/>
          All other trademarks are the property of their respective owners.
          </div>
        </div>
      </footer>
    </div>
  );
}
