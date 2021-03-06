import firebase from 'firebase/app';
import 'firebase/firestore'; //for storage
import 'firebase/auth'; //for authetication

const config = {
    apiKey: "AIzaSyD0G9liGhjni_dTZJrzQzuJvpA1o5JbttI",
    authDomain: "prodigy-wears.firebaseapp.com",
    databaseURL: "https://prodigy-wears.firebaseio.com",
    projectId: "prodigy-wears",
    storageBucket: "prodigy-wears.appspot.com",
    messagingSenderId: "1060218826777",
    appId: "1:1060218826777:web:52ff4d9df28a465a587a88",
    measurementId: "G-H1MQ8406GS"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot);

    //checking if the user data exits in the database
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        //if user does not exits, we create the user into the firebase database
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(ex){
            console.log('error creating user', ex.message)
        }
    }
return userRef;
}

export const auth = firebase.auth(); //setting up authetication

export const firestore = firebase.firestore(); //setting up storage

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;