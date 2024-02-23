import { Link, useLocation } from 'react-router-dom';
function Header() {
    const location = useLocation();
    return (
        <header>
            <Link to='/'>
            <img src=".\src\img\argentBankLogo.png" alt="Logo de Argent Bank" />
            </Link>
            <div>
                <i className="fa fa-user-circle"></i>
                <Link to="/SignIn" className={`nav-link ${location.pathname === '/SignIn' ? 'active' : ''}`}>Sign In</Link>
            </div>
        </header>
    );
}
export default Header;

