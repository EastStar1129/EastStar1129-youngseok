import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {

    return (
        <div>
            <Header />

            <main style={{ minHeight: '100%', textAlign:'center'}}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;