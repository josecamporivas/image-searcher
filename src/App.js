import './App.css';
import Home from './pages/Home/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/'index element={<Home/>} ></Route>
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
