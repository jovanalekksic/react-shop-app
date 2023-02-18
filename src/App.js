import NavBar from './components/NavBar';
import './App.css';
import Products from './components/Products'

function App() {
  const prom=<h1>Cao svima!</h1>;
  return (
    <div className="App">
      <NavBar></NavBar>
      <Products/>
    </div>
  );
}

export default App;
