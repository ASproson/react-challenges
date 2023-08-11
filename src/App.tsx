import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="App text-3xl font-bold">Hello world</div>
      <div>
        <Link to={'/todos'}>Todos</Link>
      </div>
    </div>
  );
}

export default App;
