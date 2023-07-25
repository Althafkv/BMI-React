import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Bmi from './components/Bmi';
import { Route, Routes } from 'react-router-dom';
import Lpage from './components/Lpage';
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Lpage/>}/>
        <Route path='/bmi' element={<Bmi/>}/>
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
    </>
  );
}

export default App;
