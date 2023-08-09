import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nabar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="nav-center" >
        <div className="nav-header" >
          <Link to="/" >
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button 
            type="button"
            className="nav-btn"
            onClick={() => setIsOpen(!isOpen)}>
              <FaAlignRight />
          </button>
        </div>
        
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/rooms" >Rooms</Link></li>
        </ul>
      </div>
    </nav>
    )
}