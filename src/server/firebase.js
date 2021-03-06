import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const config = {
    apiKey: "AIzaSyAr8q56teYRnFD3eGoE8yydc8qATsCktlk",
    authDomain: "home-b77db.firebaseapp.com",
    databaseURL: "https://home-b77db.firebaseio.com",
    projectId: "home-b77db",
    storageBucket: "home-b77db.appspot.com",
    messagingSenderId: "746364061221",
    appId: "1:746364061221:web:2d191e6eedb286585761cc",
    measurementId: "G-FKD60ZW1CK"
  };

class Firebase {

    constructor(){
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
        this.storage = app.storage();
    }

    estaIniciado() {
        return new Promise( resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    guardarDocumento = (nombreDocumento, documento) => this.storage.ref().child(nombreDocumento).put(documento);
    
    devolverDocumento = (documentoUrl) => this.storage.ref().child(documentoUrl).getDownloadURL();

    // guardarDocumentos = (documentos) => this.storage.ref().guardarDocumentos(documentos);

    // eliminarDocumento = documento => this.storage.ref().child(documento).delete();

}


export default Firebase;