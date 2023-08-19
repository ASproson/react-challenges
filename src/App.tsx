import './App.css';
import { Home } from './components/Home';
import { ToDosRoot } from './components/todos/ToDosRoot';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TextAnalyzerRoot } from './components/textAnalyzer/TextAnalyzerRoot';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ToDosRoot />} />
          <Route path="/textanalyzer" element={<TextAnalyzerRoot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
