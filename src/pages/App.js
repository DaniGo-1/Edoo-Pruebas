import React from 'react';
import logo from '../images/logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Ejercicio1 from './Ejercicio1';
import Ejercicio2 from './Ejercicio2';
import Ejercicio3 from './Ejercicio3';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Ejercicio1}/>
          <Route exact path='/ejercicio2' component={Ejercicio2}/>
          <Route exact path='/ejercicio3' component={Ejercicio3}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
