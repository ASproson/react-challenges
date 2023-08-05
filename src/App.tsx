import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App text-3xl font-bold text-white">Hello world</div>
      <Link to={"/demo"}>
        <div className="text-white">TO DEMO</div>
      </Link>
    </>
  );
}

export default App;
