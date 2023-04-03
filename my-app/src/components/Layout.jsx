import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <Link to='/'>Home</Link>
                <Link to='/posts'>Blog</Link>
                <Link to='/about'>Aboutpage</Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>2023 all rights reserved</footer>
        </>
    )
}

export default Layout