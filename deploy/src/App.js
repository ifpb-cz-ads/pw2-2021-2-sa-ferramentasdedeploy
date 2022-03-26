import React from "react";

import dev from '../src/assets/dev.jpg';
import './styles.css'


function App() {
  return (
    
    <div className="container">

      <section className="text">

       
          <h1>O que faz um desenvolvedor web ??</h1>

          
       
          <p>Na área das Tecnologias da Informação, o Desenvolvedor Web é o profissional que escreve, desenvolve e/ou faz manutenção em sistemas da internet. </p>
          <p>Ele é o responsável por projetar, construir e testar interfaces de aplicações ou sites. Em outras palavras, cuida de toda a programação da visualização.</p>
         

          

        

      </section>

      <img className="imagem" src={dev} alt="dev" />
    </div>
  );



}

export default App;
