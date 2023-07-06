
import _ from 'lodash';
import '../css/css-reset.css';
import '../css/index.css';
import '../dist/index.js';
function App() {
  return (
    <div className="container">
     <a href="./pages/interface-principal.html" class="botao-entrar"></a>
      <div className="abertura">
           <h1 className="titulo-principal">Lâmina Do Oculto</h1>
          
          <div className="titulo-inicial">
            <h1 className="bemvindo">Bem vindos</h1>
            <p className="slogan">O sistema de rpg Lâmina do Oculto é para todos os jogadores <br/>que querem uma nova forma de jogar fantasia clássica</p>
            <p className="clique">Clique na espada ao lado para começar<br/> Leia o documento em texto 
                <a href="LminadoOculto.html" target="_blank"  className="pdf-link"> aqui</a>
            </p>
          </div>
      </div>
   </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

