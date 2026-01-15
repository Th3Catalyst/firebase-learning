
document.addEventListener("DOMContentLoaded", () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDDln6jUesjvzSJJxl2lCYsorzq0frMTwM",
    authDomain: "testproj-79e14.firebaseapp.com",
    projectId: "testproj-79e14",
    storageBucket: "testproj-79e14.firebasestorage.app",
    messagingSenderId: "921398024823",
    appId: "1:921398024823:web:c1a4c753c70e29136bc472",
    measurementId: "G-V7DZBGMTP0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  

  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
  });
});

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//   .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((error) => {
//       console.error("Error adding document: ", error);
//   });