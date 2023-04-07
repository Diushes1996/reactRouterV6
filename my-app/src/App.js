import { Routes, Route } from 'react-router-dom';
import Aboutpage from './components/Aboutpage';
import Blogpage from './components/Blogpage';
import Homepage from './components/Homepage';
import NotFoundPage from './components/Notfoundpage';
import Layout from './components/Layout';
import './App.css';
import SinglePage from './components/SinglePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='posts/:id' element={<SinglePage/>}/>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
