import { Link, useLocation } from "react-router";
import './Navbar.css';

export const Navbar = () => {
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <span className="brand-text">Sim Limites</span>
                </Link>
                
                <div className="navbar-links">
                    <Link 
                        to="/" 
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Feed
                    </Link>
                    <Link 
                        to="/users" 
                        className={`nav-link ${isActive('/users') ? 'active' : ''}`}
                    >
                        Users
                    </Link>
                </div>
            </div>
        </nav>
    );
}