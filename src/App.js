import React, {Component} from 'react';

import Formulario from './componets/Formulario'
import Header from './componets/Header'
import ListaNoticias from './componets/ListaNoticias'

import {ApiKey} from './Key'
class App extends Component {
  state = {  
    noticias : [],
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') =>  {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${ApiKey}`

    const respuesta = await fetch(url);
    const noticias = await respuesta.json ();

    this.setState({
      noticias : noticias.articles
    })
  }

  render() { 
    return ( 
      <React.Fragment>
        <Header 
          titulo="Noticias React API"
          />

          <div className="container white contenedor-noticias">
               <Formulario 
                 consultarNoticias={this.consultarNoticias}
               />
              <ListaNoticias noticias={this.state.noticias}/>
          </div>
      </React.Fragment>

    );
  }
}
 
export default App;
