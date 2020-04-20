import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';




const config = {
    // add api info here
    apiKey: "",
    authDomain: "",
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',



};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();

    }

    // auth API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();


    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);


    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}



export default Firebase;