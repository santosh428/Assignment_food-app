import './header.css'
import {NavLink}  from 'react-router-dom';


const Header = () => {
  return (
      <>
      <nav>
        <h2>Sketch Brahma</h2>
        <div className="nav-list">
          <ul>
            <NavLink to="/" style={{ textDecoration: 'none' }}><li>Search Item</li></NavLink>
            <NavLink to="/randomdish" style={{ textDecoration: 'none' }}><li>Random Dish</li></NavLink>
          </ul>
        </div>
     </nav>
      </>
  )
};

export default Header;
