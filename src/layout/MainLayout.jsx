import { Navbar, Footer } from '../components';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div>{children}</div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;

