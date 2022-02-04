import logo from './logo.svg';
import './App.css';
// import Button from './Button.js';
// import BlackRoundButton from './BlackRoundButton.js';
// import BoldTextButton from './BoldTextButton.js';
import {Route} from 'react-router-dom';
import Home from './Home.js';
import ContactUs from './ContactUs.js';

function App() {
  return (
    <div className="App">
      <Route path="*" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </div>
  );
}

export default App;
