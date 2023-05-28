import './App.css';
import Filmes from './components/abaFilmes/Filmes';
import Header from './components/header/Header';
import IndicacaoFilme from './components/indicacaoFilme/IndicacaoFilme';

function App() {
  return (
    <div className="App">
      <Header/>
      <IndicacaoFilme/>
      <Filmes/>
    </div>
  );
}

export default App;
