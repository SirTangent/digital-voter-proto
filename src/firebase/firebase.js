const firebase = require("firebase/firebase");
const config = require("./fbconfig.json");
require("firebase/firestore")

const dev = config.devConfig;
const prod = config.prodConfig;

const nodenv = process.env.NODE_ENV || 'development'

firebase.initializeApp(prod);
const firestore = firebase.firestore();

// TODO: Add emulator support
// Switch context depending on environment
// if (nodenv === 'development') {
//     firestore.useEmulator(dev.firebaseHost, dev.firebasePort);
//     console.log("Firestore emulator active!")
// }

module.exports = {firebase, firestore};