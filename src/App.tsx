import './App.css';
import { Home } from './components/Home';
import { ToDos } from './components/todos/ToDos';
import { NavBar } from './components/todos/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ToDos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
