// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/Home';
import Band from './components/Band';
import Tour from './components/Tour';
import Contact from './components/Contact';
import GlobalStyles from './components/GlobalStyles'


function App() {
  return (
    <GlobalStyles>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Band' element={<Band />} />
          <Route path='/Tour' element={<Tour />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </GlobalStyles>
  )
}

export default App;
