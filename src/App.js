
import React from 'react';
import './App.css';

//componentes
import NavBar from './components/NavBar/NavBar';

//views

import Home from './views/Home/Home';
import Sale from './views/Sale/Sale';
import NewIn from './views/NewIn/NewIn';
import ItemDetail from './views/ItemDetail/ItemDetail';

// REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return(
      <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/new' element={<NewIn />} />
          <Route path='/detail/:id' element={<ItemDetail />} />
        </Routes>     
      </div>
      </Router>
    )
}

export default App;


