import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';

function test() {
  console.log("test");
}
function test2() {
  window.location.replace('http://www.google.com');
}
function App() {
  return (
    <div className="App">
      <div className="head">
        <h1 className="site-headline">TEST WEBPAGE</h1>
        <div className="menu">
          <BoldTextButton width="50px" height="50px" value="HOME" onClick={test} />
          <BoldTextButton width="50px" height="50px" value="GOOGLE" onClick={test2} />
          <BoldTextButton width="50px" height="50px" value="TEST" onClick={test} />
          <BoldTextButton width="50px" height="50px" value="TEST2" onClick={test} />
          <BoldTextButton width="100px" height="50px" value="CONTACT US" onClick={test} />
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div><BlackRoundButton width="100%" height="100%" value="TEST" color="red" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="TEST" backgroundColor="red"/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
