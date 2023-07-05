import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 12;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

        <NavBar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="General" />} />

          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="Business" />} />

          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />

          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="Health" />} />

          <Route exact path="/Science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="Science" />} />

          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="General" />} />

          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="Sports" />} />

          <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="Technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
