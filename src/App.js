
import './App.css';
import Menu from './components/Menu'
import Footer from './components/Footer'
import Home from './components/Home'
import Clientes from './components/Clientes/Clientes'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="container-fluid">
        <Menu/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/clientes">
              <Clientes/>
            </Route>
          </Switch>
          
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}