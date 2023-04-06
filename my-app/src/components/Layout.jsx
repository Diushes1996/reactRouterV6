import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/posts'>Blog</CustomLink>
                <CustomLink to='/about'>Aboutpage</CustomLink>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>2023 all rights reserved</footer>
        </>
    )
}

export default Layout