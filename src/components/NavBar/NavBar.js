import './NavBar.css';

import ItemCounter  from '../ItemCounter/ItemCounter';

const NavBar = () => {
    return(
        
       <nav className="container">
            <ul className="listContainer">
                <li className="listItem"><a href="#" className="anchorNavBar">NOUVEAUTÉS</a></li>
                <li className="listItem"><a href="#" className="anchorNavBar">TENDANCES</a></li>
                <li className="listItem"><a href="#" className="anchorNavBar">BLACK FRIDAY</a></li>
                <li className="listItem"><a href="#" className="anchorNavBar">SALE</a></li>
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
