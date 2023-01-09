// import logo from './logo.svg';
import React  from 'react';
// import './App.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Default from './MyComponents/Default';
import Contact from './MyComponents/Contact';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
<Router>
    <Header head="i am Hammad" title="Text App"></Header>
    {/* <h1 className='hid'>hello</h1>
    <div>{12 + 1}</div> */}
   <Routes>
    {/* <Route exact path="/"  component={Home} /> 
          <Route path="/about" component={About}/> */}
            
<Route exact path='/' element={< Default />}></Route>
<Route exact path='/home' element={< Home />}></Route>
<Route exact path='/about' element={< About title2="i am second prop"/>}></Route>
<Route exact path='/contact' element={< Contact />}></Route>
          
            </Routes>
    </Router>
   
    {/* <About/> */}
    </>
  );
}

export default App;
