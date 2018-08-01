import React, { Component } from 'react';
import './App.css';
import PlacarTime from './PlacarTime';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    aqueleTime1: '',
    aqueleTime2: '',
      gols1: 0,
      gols2: 0
    }
  }
  
  time(event) {
    this.setState({time: event.target.value})
  }
  time2(event) {
    this.setState({time2: event.target.value})
  }

    

  incrementar = numero => {
    let novoState = {};
    novoState[`gols${numero}`] = this.state[`gols${numero}`] + 1;
    this.setState(novoState);
  }

  atualizar = () =>{
    this.setState({
      gols1: 0,
      gols2: 0
    });
    
  }
  
  render() {
    return (
      <div>
        <div className="controles">
          <input type="text" name ="time" value = {this.state.time} onChange={this.time.bind(this)} placeholder="Digite o nome do time da casa" />
          <input type="text" name ="time2" value = {this.state.time2} onChange={this.time2.bind(this)}placeholder="Digite o nome do time visitante" />
          <button onClick={this.atualizar}>Zerar placar</button>
        </div>
        <div className="placar">
          <PlacarTime numero="1" gols={this.state.gols1} nomeTime={this.state.time||"Time da casa"} funcaoBotao={this.incrementar} />
          X
          <PlacarTime numero="2" gols={this.state.gols2} nomeTime={this.state.time2||"Time fora da casa"} funcaoBotao={this.incrementar} visitante="true"/>
        </div>
      </div>
    );
  }
}

export default App;

