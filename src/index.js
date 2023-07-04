import _ from 'lodash';
const logo = '../images/sword.png';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    href: "../src/pages/interface-principal.html",
    class: "botao-entrar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "abertura"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "titulo-principal"
  }, "L\xE2mina Do Oculto"), /*#__PURE__*/React.createElement("div", {
    className: "titulo-inicial"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "bemvindo"
  }, "Bem vindo"), /*#__PURE__*/React.createElement("p", {
    className: "slogan"
  }, "O sistema de rpg L\xE2mina do Oculto \xE9 para todos os jogadores ", /*#__PURE__*/React.createElement("br", null), "que querem uma nova forma de jogar fantasia cl\xE1ssica"), /*#__PURE__*/React.createElement("p", {
    className: "clique"
  }, "Clique na espada ao lado para come\xE7ar", /*#__PURE__*/React.createElement("br", null), " Leia o documento em texto", /*#__PURE__*/React.createElement("a", {
    href: "../LminadoOculto.html",
    target: "_blank",
    className: "pdf-link"
  }, " aqui")))));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));