import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTD9fntnjuVWN0WQy_ud44qMqaIo_kpkw",
  authDomain: "net-ninja-marioplan-ad90d.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-ad90d.firebaseio.com",
  projectId: "net-ninja-marioplan-ad90d",
  storageBucket: "net-ninja-marioplan-ad90d.appspot.com",
  messagingSenderId: "222135534247"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
