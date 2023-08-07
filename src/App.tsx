import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="App text-3xl font-bold text-white">Hello world</div>
      <div>
        <Link to={'/todos'} className="text-white">
          Todos
        </Link>
      </div>
    </div>
  );
}

export default App;
