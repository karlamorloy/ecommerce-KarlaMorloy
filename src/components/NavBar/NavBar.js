import './NavBar.css';
import { Icon } from 'semantic-ui-react';

const NavBar = () => {
    return(
        
       <nav className="container">
            <ul className="listContainer">
                <li className="listItem"><a href="#" className="anchorNavBar">NOUVEAUTÉS</a></li>
                <li className="listItem"><a href="#" className="anchorNavBar">TENDANCES</a></li>
                <li className="listItem"><a href="#" className="anchorNavBar">BLACK FRIDAY</a></li>
                <li className="listItem"><a href="#" className="anchorNavBar">SALE</a></li>
            </ul>
            <div className="shoppingCart">
            <Icon name='cart' />
            </div>
       </nav> 
       
    );
};

export default NavBar; 




