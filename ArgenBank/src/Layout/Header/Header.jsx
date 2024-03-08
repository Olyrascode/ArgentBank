import { Link, useLocation } from 'react-router-dom';

import Logo from "@/Assets/Img/argentBankLogo.png"
function Header() {
    const location = useLocation();
    return (
        <header>
            <Link to='/'>
            <img src={Logo} alt="Logo de Argent Bank" />
            </Link>
            <div>
                <i className="fa fa-user-circle"></i>
                <Link to="/SignIn" className={`nav-link ${location.pathname === '/SignIn' ? 'active' : ''}`}>Sign In</Link>
            </div>
        </header>
    );
}
export default Header;

