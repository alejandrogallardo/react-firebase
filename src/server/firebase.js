import app from 'firebase/app';
import 'firebase/firestore';


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

    contructor(){
        app.initializeApp(config);
        this.db = app.firestore();
    }

}


export default Firebase;