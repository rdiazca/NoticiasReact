import React, { Component, Fragment } from "react";
import Header from './components/Header';

class App extends Component{
  state = { 
    noticias: []
  }

 componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=cu&category=business&apiKey=072ab919f7c4463ca76fa6510cdb7ca4`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      this.setState({
        noticias: noticias.articles
      })
  }
  render(){
    return ( 
      <Fragment>
        <Header
        titulo='Noticias React API'
        />
        <div className="container white contenedor-noticas">
          
          </div>
      </Fragment>
      );
  }
}

export default App;
