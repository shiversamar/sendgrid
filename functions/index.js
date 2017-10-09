// const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase Tracker App!");
//  console.log("Hello from Firebase Tracker App! testing ");
// })

var functions = require('firebase-functions');
const sendgrid = require('sendgrid')
const client = sendgrid("38pSDz0Th8pI7gsE9xvBqKXkke2QHM1qug5rjvqoVC8")
function parseBody(body) {
  var helper = sendgrid.mail;
  var fromEmail = new helper.Email(body.from);
  var toEmail = new helper.Email(body.to);
  var subject = body.subject;
  var content = new helper.Content('text/html', body.content);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  return  mail.toJSON();
}
exports.httpEmail = functions.https.onRequest((req, res) => {
  return Promise.resolve()
    .then(() => {
      if (req.method !== 'POST') {
        const error = new Error('Only POST requests are accepted');
        error.code = 405;
        throw error;
      }
      const request = client.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: parseBody(req.body)
      });
      return client.API(request)
    })
    .then((response) => {
      if (response.body) {
        res.send(response.body);
      } else {
        res.end();
      }
    })
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });
})




// Project Console: https://console.firebase.google.com/project/fir-apptracker/overview
// Function URL (httpEmail): https://us-central1-fir-apptracker.cloudfunctions.net/httpEmail
