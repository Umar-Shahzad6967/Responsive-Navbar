import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
