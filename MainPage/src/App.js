import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

function test() {
  console.log("test");
}

function App() {
  return (
    <div className="App">
      <Button width="50px" height="50px" value="Test" cbFunction={test}/>
    </div>
  );
}

export default App;
