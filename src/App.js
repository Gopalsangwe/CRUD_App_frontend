import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Table from './components/Table'
import Create from './components/Create'
import Update from './components/Update'
import Delete from './components/Delete'
import { BrowserRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">
               
      <Router>
      <Home />
        <Routes>
          {/* <Route exact path='/home' element={<Home />}></Route> */}
          <Route exact path='/table' element={<Table />}>Table</Route>
          <Route exact path='/update' element={<Update />}>Update Item</Route>
          <Route exact path='/create' element={<Create />}>Create Item</Route>
          <Route exact path='/delete' element={<Delete />}>Delete Item</Route>
        </Routes>

      </Router>
    </div>

  );
}

export default App;
