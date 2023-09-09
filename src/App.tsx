import './App.css';
import { Home } from './components/Home';
import { ToDosRoot } from './components/todos/ToDosRoot';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TextAnalyzerRoot } from './components/textAnalyzer/TextAnalyzerRoot';
import { PokeCardsRoot } from './components/pokeCards/PokeCardsRoot';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<ToDosRoot />} />
            <Route path="/textanalyzer" element={<TextAnalyzerRoot />} />
            <Route path="/pokecards" element={<PokeCardsRoot />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
