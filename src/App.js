import React, { useEffect } from 'react';
import './App.css';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import Grid from '@material-ui/core/Grid';
import AppNavBar from './componentes/layout/AppNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuarios';
import Login from './componentes/seguridad/Login';
import { FirebaseContext } from './server';
import { useStateValue } from './sesion/store'; // representacion del context provider
import { Snackbar } from '@material-ui/core';


function App(props) {

  let firebase = React.useContext(FirebaseContext);
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false); // crea una variable de estado, metodo

  const [{openSnackbar}, dispatch] = useStateValue();

  useEffect(() => {
    firebase.estaIniciado().then( val => {
      setupFirebaseInicial(val);
    });
  });

  return autenticacionIniciada !== false ? (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{vertical:"bottom", horizontal:"center"}}
        open={openSnackbar ? openSnackbar.open : false}
        autoHideDuration={3000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {openSnackbar ? openSnackbar.mensaje : ""}
          </span>
        }
        onClose={() => 
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: false,
              mensaje: ""
            }
          })
        }
      >

      </Snackbar>
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavBar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
              <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario}></Route>
              <Route path="/auth/login" exact component={Login}></Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    </React.Fragment>
  )
  :
  null
};



export default App;
