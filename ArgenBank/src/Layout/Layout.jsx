
import Header from '@/Layout/Header/Header.jsx';
import Footer from '@/Layout/Footer/Footer.jsx';

import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;