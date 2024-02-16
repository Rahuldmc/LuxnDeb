import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Event from './Pages/Event';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Events/:eventName' element={<Event/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
