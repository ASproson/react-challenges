import './App.css';
import { Home } from './components/Home';
import { ToDos } from './components/todos/ToDos';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TextAnalyzer } from './components/textAnalyzer/textAnalyzer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ToDos />} />
          <Route path="/textanalyzer" element={<TextAnalyzer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
