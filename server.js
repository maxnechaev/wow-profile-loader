// curl -u 4910b7e00751425880423678c4163ca7:9LUC6zGWd8kheDOwp64jtzOVwGNbCi7N -d grant_type=client_gameServers https://us.battle.net/oauth/token
// {"access_token":"USIf4v8KAQ36yAtV2qJi8PnhJbs3v9b3kb","token_type":"bearer","expires_in":86399}
//
// https://eu.api.blizzard.com/wow/user/characters?locale=en_US&access_token=USMiKhB8DDn0tSf9o9k5z0yLbGXfW2LTC5
//
//
// Error 429 = Exceeding the per-second limit results in a 429 error for the remainder of the second until the quota refreshes.
//
//

var args = process.argv.slice(2);

var request = require("request");
var secrets = require('./secrets.js');
var secrets = require('./dummy-db.js');
var fs = require('fs'); //file system
console.log('Welcome to the World of Warcraft Profile Viewer!');
var TOKEN = 'USMiKhB8DDn0tSf9o9k5z0yLbGXfW2LTC5';
var locale = 'en_US';
var region = 'eu';

function getProfile(region, locale, TOKEN, cb) {
 var options = {
   url: "https://" + region + ".api.blizzard.com/wow/user/characters?locale=" + locale + "&access_token=" + TOKEN,
   headers: {
     "User-Agent": "request",
     'Authorization': 'USMiKhB8DDn0tSf9o9k5z0yLbGXfW2LTC5',
     // 'BNET_ID': '4910b7e00751425880423678c4163ca7',
     // 'BNET_SECRET': '9LUC6zGWd8kheDOwp64jtzOVwGNbCi7N',
     // 'WOW_AUTHORIZE_URI': 'https://eu.battle.net/oauth/authorize',
     // 'WOW_TOKEN_URI': 'https://eu.battle.net/oauth/token',
   }
 };

 request(options, function(err, res, body) {
   cb(err, body);
 });
}

function viewProfile(url, filePath) {
  request.get(url)
  .on("error", function (err) {
    throw err;
  })
  .pipe(fs.createWriteStream(filePath));
}

getProfile("jquery", "jquery", function(err, result) {
if(err){
  console.log("Errors:", err);
} else {
  var avatars = JSON.parse(result);
  avatars.forEach(function(contributor) {
    return avatarDownloader(contributor.avatar_url, "./avatars/" + contributor.login + ".jpg");
});
  console.log("Download complete");
}
});
//
//
//
// var BnetStrategy = require('passport-bnet').Strategy;
// var BNET_ID = process.env.BNET_ID
// var BNET_SECRET = process.env.BNET_SECRET
//
// // Use the BnetStrategy within Passport.
// passport.use(new BnetStrategy({
//     clientID: BNET_ID,
//     clientSecret: BNET_SECRET,
//     callbackURL: "https://localhost:3000/auth/bnet/callback",
//     region: "us"
// }, function(accessToken, refreshToken, profile, done) {
//     return done(null, profile);
// }));
//
//
// app.get('/auth/bnet',
//     passport.authenticate('bnet'));
//
// app.get('/auth/bnet/callback',
//     passport.authenticate('bnet', { failureRedirect: '/' }),
//     function(req, res){
//         res.redirect('/');
//     });
