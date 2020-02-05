import React, { Component } from 'react';
import './App.css';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import Grid from '@material-ui/core/Grid';
import AppNavBar from './componentes/layout/AppNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider }  from '@material-ui/core/styles';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuarios';

class App extends Component {
  render(){
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavBar />
        <Grid container>
          <Switch>
            <Route path="/" exact component={ListaInmuebles}></Route>
            <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario}></Route>
          </Switch>
        </Grid>
      </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
