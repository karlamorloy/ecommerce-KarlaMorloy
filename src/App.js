
import React from 'react';
import './App.css';

//componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return(
      <div className="App">
        <NavBar/>
        <h1>Burger House</h1>
        <h2>Mouthwatering delicious</h2>
        <div className="ItemListSection">
          <ItemListContainer/>  
        </div>      
      </div>
    )
}

export default App;



