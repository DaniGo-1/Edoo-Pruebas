import React from 'react';
import logo from '../images/logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Ejercicio1 from './Ejercicio1';
import Ejercicio2 from './Ejercicio2';
import Ejercicio3 from './Ejercicio3';
import Ejercicio4 from './Ejercicio4';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Ejercicio1}/>
          <Route exact path='/ejercicio2' component={Ejercicio2}/>
          <Route exact path='/ejercicio3' component={Ejercicio3}/>
          <Route exact path='/ejercicio4' component={Ejercicio4}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
