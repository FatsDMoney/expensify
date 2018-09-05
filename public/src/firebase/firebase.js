import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAsaH-U9dxgUlWK38hmVLnK22C_-xW3xiY",
    authDomain: "expensify-e02c2.firebaseapp.com",
    databaseURL: "https://expensify-e02c2.firebaseio.com",
    projectId: "expensify-e02c2",
    storageBucket: "expensify-e02c2.appspot.com",
    messagingSenderId: "1058885104631"
  };

  firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Tyler Wasson',
    age: 24,
    isSingle: true,
    location: {
        city: 'State College',
        state: 'Pennsylvania',
        country: 'United States'
    }
});

//database.ref().set('This is my data');

database.ref('age').set(25);
database.ref('location/city').set('Philadelphia');

database.ref('attributes').set({
    height: 73,
    weight: 184
});