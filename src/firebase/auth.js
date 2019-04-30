import { auth } from './firebase';

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
  auth.signOut();

export const showUserId = ()=>
  auth.currentUser.uid;