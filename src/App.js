import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [numero, setNumero] = useState(123)   // [lista]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js </code> and save to reload.

          <p>FERNANDA MIOKO</p>

          <p id='teste'>{numero}</p>

          <button onClick={() => setNumero(numero + 1)}>Aumentar +1</button> <br></br>
          <button onClick={() => setNumero(numero - 1)}>Diminuir -1</button>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <script>
      /* var inicio = 0;

        var botao = document.querySelector('button');
        var teste = document.querySelector('#teste');

        botao.onclick = function ('click', function) */


      </script>




    </div>
  );
}

export default App;
