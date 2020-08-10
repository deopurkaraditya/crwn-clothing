import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDkOwzHSfqn-cDhUxsvC_e1xwXg3E3bnWg",
  authDomain: "crwn-db-a681d.firebaseapp.com",
  databaseURL: "https://crwn-db-a681d.firebaseio.com",
  projectId: "crwn-db-a681d",
  storageBucket: "crwn-db-a681d.appspot.com",
  messagingSenderId: "614654567607",
  appId: "1:614654567607:web:995be59e9a5f151c515932",
  measurementId: "G-93MC87LG6D"
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  }
  
  return userRef;

}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;