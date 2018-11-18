const express = require('express');
const path = require ('path');

const app = express();

app.use(express.static('dist/wow-profile-loader'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(_dirname, '/dist/wow-profile-loader/src/index.html'));
  app.listen(process.env.PORT || port, () => {
    console.log('Server is started');
  })
})
// /*
// HTTPS is required in order for Battle.net to reply to your server with a value token, so if you have
// no SSL certificate you will not be able to use this or any other library.
// While it is not 100% required to use sessions for Battle.net auth, it is highly recommended as a security
// measure to prevent unauthorized 3rd party abuse.
//  */
// // var bnet = require('../index'),
// //   express = require('express'),
// //   fs = require('fs'),
// //   https = require('https'),
// //   path = require('path'),
// //   session;
//
// var express = require('express');
// var app = express();
//
// var bnet = require('express-battlenet-oauth');
//
// var server = app.listen(4200, function() {
//   console.log('Listening on port %d', server.address().port);
//   console.log('To test this example, navigate to http://localhost:' + server.address().port);
//   console.log('You\'ll have to accept a security exception for the self signed SSL certificate.');
// });
//
// var bnet = require('express-battlenet-oauth'),
//   express = require('express'),
//   fs = require('fs'),
//   https = require('https'),
//   path = require('path'),
//   session;
//
//
//
// try {
//   session = require('express-session');
// } catch(e){
//   if(e.code === 'MODULE_NOT_FOUND'){
//     throw new Error('Cannot find express-session. To run the example please run "npm install" from the command line. If it does not help, re-install express-session package');
//   }
// }
//
//
// // //Load session middleware
// app.use(session({
//   secret: 'keyboard cat',
//   cookie: { secure: true },
//   saveUninitialized: true,
//   resave: true
// }));
//
// //Set the variables our plugin needs
// app.set('BNET_ID', '4910b7e00751425880423678c4163ca7');
// app.set('BNET_SECRET', 'otzrW1t2uIW3CIt11enjyo71yuJMw44p');
// app.set('BASE_URL', 'http://localhost:4200');
// app.set('BNET_REGION', 'us');
// app.set('BNET_CALLBACK_URL', '/auth');
// app.set('BNET_AUTH_URL', '/');
// app.set('BNET_SCOPE', 'wow.profile');
// app.set('LOGIN_SUCCESS', function(req, res){ res.status(200).send('Use your own method to manipulate res.token_data, currently: ' + JSON.stringify(res.access_token));});
// app.set('LOGIN_FAILURE', function(req, res){ res.status(500).send(res.error); });
//
// app.use('/', bnet);
//
// //Setup your express app like normal
//
//
//
// /*
// For this example we are using sessions, so be sure to npm install the dependencies. Tell the user if they haven't.
//  */
// // try {
// //   session = require('express-session');
// // } catch(e){
// //   if(e.code === 'MODULE_NOT_FOUND'){
// //     throw new Error('Cannot find express-session. To run the example please run "npm install" from the command line.');
// //   }
// // }
//
//
// //Load our SSL key and certificate
// // var ssl_options = {
// //   key: fs.readFileSync(path.join(rootPath, 'ssl/localhost.key')),
// //   cert: fs.readFileSync(path.join(rootPath, 'ssl/localhost.crt'))
// // };
//
//
// // //Load session middleware
// // app.use(session({
// //   secret: 'keyboard cat',
// //   cookie: { secure: true },
// //   saveUninitialized: true,
// //   resave: true
// // }));
//
//
//
//
// // const app = require('express')();                                           // <------- NPM install
// // const passport = require('passport');                                       // <------- NPM install
// // const BnetStrategy = require('passport-bnet').Strategy;                     // <------- NPM install
// // const BNET_ID = process.env.BNET_ID;
// // const BNET_SECRET = process.env.BNET_SECRET;
// // const fs = require('fs');
// // const https = require('https');
// // const fetch = require('node-fetch');
// // // const credentials = require("./credentials");
// //
// // const PORT = 3000;
// //
// // // fetch(this.myURL)
// // //   .then(response => response.json())
// // //   .then(myJson => console.log(
// // //     JSON.stringify(myJson)))
// // //   .catch(error => console.error('The following Error came from app.js | back end server: ', error));
// // //
// //
// // Array(3).fill().map(()=>{
// //  console.log(' ');
// // });
// // console.log('--------------------------- NEW REQUEST BELOW ---------------------------');
// // Array(3).fill().map(()=>{
// //  console.log(' ');
// // });
// //
// // fetch(myURL)
// //   .then(response => response.json())
// //   .then(myJson => console.log(
// //     JSON.stringify(myJson)))
// //   .catch(error => console.error('The following Error came from app.js | back end server: ', error));
// //
// //
// //   data = {
// //      'code': code,
// //      'redirect_uri': 'https://localhost/oauth2callback',
// //      'grant_type': 'authorization_code',
// //      'client_id': CLIENT_ID,
// //      'client_secret': CLIENT_SECRET,
// //      'scope': 'sc2.profile'
// // }
// // resp = requests.post('https://eu.battle.net/oauth/token', data=data)
// //
// //
// //
// //   // app.get('/', function(req, res) {
// //   //     var request = require("request");
// //   //     var options = {
// //   //         method: 'GET',
// //   //         url: `https://${region}.api.blizzard.com${apiPath}`,
// //   //         qs: { access_token: req.user.bnet.token }
// //   //     };
// //   //     console.log('options.qs here ', options.qs);
// //   //
// //   //     request(options, function (err, response, data) {
// //   //         res.render('/index', {
// //   //             user: req.user,
// //   //             wowChars: JSON.parse(data)
// //   //         });
// //   //     });
// //   // });
// //
// // https.createServer(app).listen(PORT, () => {
// //     console.log(`Server listening on port: ${PORT}`);
// //
// //     // if (req.url === "/") {
// //     // if (typeof ACCESS_TOKEN !== "undefined") {
// //     //     Youtube.authenticate({
// //     //         type: "oauth",
// //     //         token: ACCESS_TOKEN
// //     //     });
// //     //
// //     //     return;
// //     // }}
// //
// //
// // });
// //
// // module.exports = app;
