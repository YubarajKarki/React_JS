import './App.css';
import Navbar from './components/Navbar';
// let name = "Yubaraj Karki";
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');//whether the dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode"

    }
  }

  return (
    <>

      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Info</li>
      </nav>

      <img src="" alt="" />

      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          JSX stands for JavaScript XML.JSX allows us to write HTML in React.JSX makes it easier to write and add HTML in React.SX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications. With JSX you can write expressions inside curly braces { }. The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result. The HTML code must be wrapped in ONE top level element.So if you like to write two paragraphs, you must put them inside a parent element, like a div element.JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.Elements Must be Closed.Attribute class = classNameThe class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.Use attribute className instead.Conditions - if statements
          React supports if statements, but not inside JSX.To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:Option 1:
          Write if statements outside of the JSX code

        </p>
      </div> */}

      {/* <Navbar title= "TextUtils" aboutUtils="About Utils"/> */}
      {/* <Navbar/> */}

      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          {/* Old Syntax  
        {/* <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter Text Here to Analyze" mode={mode} />   
            </Route> */}
        {/* New Syntax  */}
        <Route exact path="/about" element={<About mode={mode} />} />

          
        <Route exact  path='/' element={<TextForm showAlert={showAlert} heading="Enter Text Here to Analyze" mode={mode}/>} />
          </Routes> 
        {/* <TextForm showAlert={showAlert} heading="Enter Text Here to Analyze" mode={mode} /> */}

      </div>

      </Router>  
    </>
  );
}

export default App;
