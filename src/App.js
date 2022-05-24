import './App.css';
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/'index element={<Home/>} ></Route>
          <Route path='/search/:searchTopic' element={<SearchResults />}/>
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
