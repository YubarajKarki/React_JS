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
import NewsItem from './components/NewsItem';

export default class App extends Component {
  // a = "World!!!";
  render() {
    return (
      // <div>Hello {this.a} This is my First Class Based Component</div>

      <div>
        <NavBar />
        <News />
        <NewsItem />
      </div>
    )
  }
}

