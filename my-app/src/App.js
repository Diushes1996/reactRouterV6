import { Routes, Route, Link } from 'react-router-dom';
import Aboutpage from './components/Aboutpage';
import Blogpage from './components/Blogpage';
import Homepage from './components/Homepage';
import NotFoundPage from './components/Notfoundpage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>Aboutpage</Link>
      </header>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<Aboutpage/>} />
        <Route path='/posts' element={<Blogpage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>

    </div>
  );
}

export default App;
