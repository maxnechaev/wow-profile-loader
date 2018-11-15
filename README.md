# wow-profile-loader

A light-weight app that allows you to see your World of Warcraft characters, their thumbnails and stats.

The project is done on [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5 with use of Blizzard APIs.


## Screenshots

!["wow-profile-loader"](https://github.com/maxnechaev/wow-profile-loader/blob/master/src/assets/screenshots/scrn_1.png)

!["wow-profile-loader"](https://github.com/maxnechaev/wow-profile-loader/blob/master/src/assets/screenshots/scrn_2.png)


## Installation

Run `npm i` or `npm install` to install the dependencies from package.json.


## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.


## IMPORTANT

Since the app is still in development, it uses only the author's own access token provided by Blizzard. Hence, you might need to to configure `src/app/characters/characters.component.ts` by changing `region` and `access_token` vars in `httpOptions`. As soon as oauth 2.0 authorization is added, the users can enjoy the app in full.

If you want to implement Blizzard authentication yourself, it is highly recommended to use stable 3rd-party libraries instead of own implementation (as per Blizzard). More information about oauth can be found [here](https://us.battle.net/forums/en/bnet/15051532/) and [here](https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow).
