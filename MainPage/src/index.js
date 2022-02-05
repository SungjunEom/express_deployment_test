import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './App.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import ContactUs from './ContactUs';
import ButtonParty from './ButtonParty.js';
import Products from './Products.js';
import NotFound from './NotFound';
import Books from './Books.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="ButtonParty" element={<ButtonParty />} />
          <Route path="Products" element={<Products />}> 
            <Route path="Books" element={<Books />}/>
            <Route path="" element={<Books/>} />
          </Route>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
