
const logo= './sword.png'
function App() {
  return (
    <div className="container">
     <a href="interface-principal.html" class="botao-entrar"></a>
      <div className="abertura">
           <h1 className="titulo-principal">Lâmina Do Oculto</h1>
          
          <div className="titulo-inicial">
            <h1 className="bemvindo">Bem vindo</h1>
            <p className="slogan">O sistema de rpg Lâmina do Oculto é para todos os jogadores <br/>que querem uma nova forma de jogar fantasia clássica</p>
            <p className="clique">Clique na espada ao lado para começar<br/> Leia o documento em texto 
                <a href="https://docs.google.com/document/d/1d3rvWryWF0ju3VQ1ehP0EpVZWnGRgAufeWAeYOhAet0/edit?usp=sharing" target="_blank"  className="pdf-link"> aqui</a>
            </p>
          </div>
      </div>
   </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

