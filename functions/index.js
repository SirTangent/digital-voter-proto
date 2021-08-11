const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.hello = functions.https.onRequest((req, res) => {
  res.send(`Hello, world! The current date is ${new Date().toDateString()}.`);
});

exports.castBallot = functions.https.onCall( (data, context) => {
  // Ensure user is authenticated and approved

  // Ensure a ballot has not already been casted by user

  // Append new ballot

});
