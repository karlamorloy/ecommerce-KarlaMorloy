import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

import ItemCounter  from '../ItemCounter/ItemCounter';

const NavBar = () => {
    return(
        
       <nav className="container">
            <ul className="listContainer">
                <Link className="listItem" to='/'>HOME</Link>
                <Link className="listItem" to='/new'>NEW</Link>
                <Link className="listItem" to='/sale'>SALE</Link>
            </ul>
            
            <div>
            <ItemCounter stock={5} initial={1}/>
            </div>
       </nav> 
       
    );
};

export default NavBar; 


/*<div className="shoppingCart">
<Icon name='cart' />
<ItemCounter />
</div>
*/
