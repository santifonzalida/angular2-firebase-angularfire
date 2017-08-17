// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyD0NtZCaA-jYvNjpgeIEUla3YMR3k38izA",
      authDomain: "angular2-firebase-angularfire.firebaseapp.com",
      databaseURL: "https://angular2-firebase-angularfire.firebaseio.com",
      projectId: "angular2-firebase-angularfire",
      storageBucket: "",
      messagingSenderId: "675844714505"
    }
};
