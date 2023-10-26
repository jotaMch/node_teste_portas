
//criar tipo um formulario para selecionar a marca, modelo e ano do carro.
//mandar para tabela fip para que ela retorne o preço e demais informações //andpoint de respostas da api sera mostrada para o cliente
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marcas: [],
      error: null
    };
  }

  componentDidMount() {
    
    fetch("https://deividfortuna.github.io/fipe/v2/")
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao recuperar as marcas dos carros.');
        }
        return response.json();
      })
        .then(data => {
          this.setState({ marcas: data });
        })
        .catch(error => {
          this.setState({ error: error.message });
        });
  }

  render() {
    const { marcas, error } = this.state;

    return (
      <>
        <h1>Lista de Marcas de Carros</h1>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <ul>
            {marcas.map(marca => (
              <li key={marca.codigo}>{marca.nome}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default App;
