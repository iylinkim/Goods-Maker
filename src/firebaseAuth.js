import {firebaseInstance, authService} from "fbase";

class FirebaseAuth {
  createAccount(email, password) {
    return authService.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return authService.signInWithEmailAndPassword(email, password);
  }

  socialLogin(authProvider) {
    const provider = new firebaseInstance.auth[`${authProvider}AuthProvider`]();
    return authService.signInWithPopup(provider);
  }

  logout() {
    authService.signOut();
  }
}

export default FirebaseAuth;
