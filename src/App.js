// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/Home';
import Band from './components/Band';
import Tour from './components/Tour';
import Contact from './components/Contact';
import GlobalStyles from './components/GlobalStyles'
import Modal from './components/modals';
// import './responsives/mobile.css'


function App() {
  return (
    <GlobalStyles>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/band' element={<Band />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <Modal/> */}
      </div>
    </GlobalStyles>
  )
}

export default App;
