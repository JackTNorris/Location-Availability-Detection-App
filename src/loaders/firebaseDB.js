const firebase = require('firebase');
const firebaseConfig = require('../config/firebase.json');

if (firebase.default.apps.length < 1) {
  firebase.default.initializeApp(firebaseConfig);
}

module.exports = firebase.default.database();
