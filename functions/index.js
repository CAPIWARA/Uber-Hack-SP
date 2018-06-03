const admin = require('firebase-admin');
const functions = require('firebase-functions');
const { discal } = require('geo-dist-calc');
const account = require('./credentials');

admin.initializeApp({
  credential: admin.credential.cert(account),
  databaseURL: "https://uber-hack-sp.firebaseio.com"
});

exports.search = functions.https.onRequest((request, response) => {
  const table = admin.database().ref('/establishments');

  table.once('value').then((establishments) => {
    const nearby = [];

    establishments.forEach((item) => {
      const establishment = item.val();

      const { kilometers } = discal(establishment, {
        latitude: +request.query.latitude,
        longitude: +request.query.longitude
      });

      if (kilometers <= +request.query.around)
        nearby.push(establishment);
    });

    response.send(nearby);
  });
});
