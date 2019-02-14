import * as firebase from 'firebase'// import something here
const config = {
  apiKey: 'AIzaSyD9c4ehKzUkiSJWMBs_MI7e8ivgkSjr0Tk',
  authDomain: 'dsamanager-sih.firebaseapp.com',
  databaseURL: 'https://dsamanager-sih.firebaseio.com',
  projectId: 'dsamanager-sih',
  storageBucket: 'dsamanager-sih.appspot.com',
  messagingSenderId: '162723810859'
}
firebase.initializeApp(config)

// leave the export, even if you don't use it
export default ({ Vue }) => {
  // something to do
}
