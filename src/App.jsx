import './App.css';
import { Portfolio } from './components/Portfolio/Portfolio';
import data from './data/img.json';

function App() {
  return (
    <>
    <Portfolio projectList = { data } />
    </>
  );
}

export default App;
