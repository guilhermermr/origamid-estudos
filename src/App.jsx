
import React, { useState } from 'react';

import './App.css';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    {nome: 'notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
  ],

  ativa: true,
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    {nome: 'notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
    {nome: 'Guitarra', preco: 'R$ 3500'},
  ],

  ativa: true,
}

const erro = {
  cliente: 'Não encontrado',
  idade: 0,
  compras: [
    {nome: '', preco: 'R$ 0'},
    {nome: '', preco: 'R$ 0'},
    {nome: '', preco: 'R$ 0'},
    {nome: '', preco: 'R$ 0'},
  ],

  ativa: false,
}

function App() {

  const [valor, setValor] = useState(0);
  const [nomeDados, setNomeDados] = useState("");
  const [dados, setDados] = useState(erro);
 
  const trocarDados = () => {
    if(nomeDados === "luana"){
      setDados(luana);
    }else if(nomeDados === "mario"){
      setDados(mario);
    }else{
      setDados(erro);
      alert("Não encontramos nada nosso banco de dados!")
    }
    
    atualizaDados();
  }

  const atualizaDados = () => {
    let valorTotal = 0;

    dados.compras.forEach(function(compra){
  
      valorTotal += Number(compra.preco.replace("R$ ", ""))
  
    })

    setValor(valorTotal);
  }


  
  return (
    
    <>
      <p>nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p style={{}}>situação: {dados.ativa ? 'ativa' : 'inativa'}</p>
      <p>total gasto: {valor}</p>
      { valor >= 10000 ? <p id='gasto'>Você está gastando muito!</p> : <p id='gasto'>Gasto moderado!</p>}

      <input onChange={(e) => setNomeDados(e.target.value)}></input>

      <button onClick={trocarDados}>Trocar</button>



    </>

  );
}

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Lista de compras para {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;
