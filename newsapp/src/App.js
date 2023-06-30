import './App.css';  

//Function Based Component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//Class Based Component
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  // a = "World!!!";
  pageSize = 12;

  render() {
    return (
      // <div>Hello {this.a} This is my First Class Based Component</div>
      <div>
        <Router>
        <NavBar />
        {/* <News pageSize={this.pageSize} country="in" category="Sports" /> */}
        <Routes>
      
            <Route exact path="/" element={<News key = "general" pageSize={this.pageSize} country="in" category="General" />} />
            
            <Route exact path="/business" element={<News key ="business" pageSize={this.pageSize} country="in" category="Business" />} />
            
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
            
            <Route exact path="/health" element={<News key = "health" pageSize={this.pageSize} country="in" category="Health" />} />
            
            <Route exact path="/Science" element={<News key = "science" pageSize={this.pageSize} country="in" category="Science" />} />
            
            <Route exact path="/sports" element={<News key ="sports" pageSize={this.pageSize} country="in" category="Sports" />} />
            
            <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="Technology" />} />
        </Routes> 
        </Router>
      </div>
    )
  }
}

