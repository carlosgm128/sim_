import { Link } from "react-router";

export const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: 'brown', color: 'white', marginBottom: '20px' }}>
            <h1>Sim Limites</h1>

            <Link to="/" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Feed</Link>
            <Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>Users</Link>
        </nav>
    );
}