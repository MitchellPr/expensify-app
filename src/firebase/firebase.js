import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

const database = firebase.database();

database.ref().set('Mitch')

export { firebase, database as default }




// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses')
// .on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses);
// })


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses);
// })


// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'To be paid',
//   amount: 300000,
//   createdAt: 3
// })



// database.ref('notes/-MacZnjuvb5PgrIg7IwL').remove()

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Vue'
// })

// const firebaseNotes = {
//   notes: {
//     dsfdsfw: {
//       title: 'first note',
//       body: 'This is my note'
//     },
//     flkdgjo: {
//       title: 'second note',
//       body: 'This is my second note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'first note',
//   body: 'This is my note'
// },
// {
//   id: '13',
//   title: 'second note',
//   body: 'This is my second note'
// }]

// database.ref('notes').set(notes)



// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// })

// database.ref().update({
//   name: 'Susan'
// })


// const onValueChange = database.ref()
// .on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//   database.ref('age').set(32)
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(36)
// }, 10500)





// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val);
// }).catch((e) => {
//   console.log('Error fetching data', e);
// })



// database.ref().set({
//   name: 'Mitchell Prince',
//   age: 30,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Johannesburg',
//     country: 'South Africa'
//   }
   
// }).then(() => {
//   console.log('Data updated');
// }).catch((e) => {
//   console.log('This failed', e);
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref().update({
//   job: 'Manager',
//   "location/city": 'Durban'
// })

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data was removed');
// })
// .catch((e) => {
//   console.log(e);
// })