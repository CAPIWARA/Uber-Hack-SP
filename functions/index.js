const admin = require('firebase-admin');
const functions = require('firebase-functions');
const { discal } = require('geo-dist-calc');
const account = require('./credentials');
const cors = require('cors')({ origin: true });

admin.initializeApp({
  credential: admin.credential.cert(account),
  databaseURL: "https://uber-hack-sp.firebaseio.com"
});

exports.search = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const table = admin.database().ref('/establishments');

    table.once('value').then((establishments) => {
      const nearby = [];

      establishments.forEach((item) => {
        const establishment = item.val();

        const { kilometers } = discal(establishment, {
          latitude: +req.query.latitude,
          longitude: +req.query.longitude
        });

        if (kilometers <= +req.query.around)
          nearby.push(establishment);
      });

      res.send(nearby);
    });
  });
});

exports.reservations = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const table = admin.database().ref('/reservations').orderByChild('user').equalTo(+req.query.user);

    table.once('value').then((reservations) => res.send(reservations.val()));
  });
});
