import logo from './logo.svg';
import './App.css';
import Listar from '../src/components/Listar'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Listar nombre = 'juan' edad = {18} telefono = {6934727842}/> 
        <Listar nombre = 'alberto' edad = {27} telefono = {693547842}/>
        <Listar nombre = 'pepito' edad = {56} telefono = {63242397463242}/>
      </header>
    </div>
  );
}

export default App;

