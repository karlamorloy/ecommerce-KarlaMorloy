
import React from 'react';
import './App.css';

//componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return(
      <div className="App">
        <NavBar/>
        <h1>Les enfants shop</h1>
        <h2>Cherche tout les choses que vous besoin pour votre bebe</h2>
        <div className="ItemListSection">
          <ItemListContainer description='Porte-Bébé Flip Ergo 4 En 1 Infantino' price='45,90 €' note=' Livraison standard oferte dès 39€' img='https://www.babygloo.com/6207-large_default/porte-bebe-flip-ergo-4-en-1-infantino.jpg'/>
          <ItemListContainer description='Barrière De Lit Portable Bébé / Enfant Safety 1st Bleu' price='29,90 €' note=' Livraison standard oferte dès 39€' img='https://www.babygloo.com/5484-large_default/barriere-de-lit-portable-bebe-enfant-safety-1st-bleu.jpg'/>
          <ItemListContainer description='Barrière De Sécurité Easy Close Extra Métal Safety 1st' price='44,90 €' note=' Livraison standard oferte dès 39€' img='https://www.babygloo.com/5454-large_default/barriere-de-securite-easy-close-extra-metal-safety-1st.jpg'/>    
        </div>      
      </div>
    )
}

export default App;



