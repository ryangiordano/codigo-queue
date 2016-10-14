
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyDL9gm6Wnq-k4k0Hk1YXBhFeMp45UYZzC0",
  authDomain: "codigo-queue.firebaseapp.com",
  databaseURL: "https://codigo-queue.firebaseio.com",
  storageBucket: "codigo-queue.appspot.com",
  messagingSenderId: "961853633814"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
