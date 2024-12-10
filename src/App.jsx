import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Trails from './components/trail';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/trail'>Dog Friendly Trails</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/' />
            <Route path='/trail' element={<Trails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;