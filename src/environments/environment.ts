// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:  {
      apiKey: 'AIzaSyC5SXVSTASSAvR-At8AvlBI8CZmGPbBeWA',
      authDomain: 'fir-apptracker.firebaseapp.com',
      databaseURL: 'https://fir-apptracker.firebaseio.com',
      projectId: 'fir-apptracker',
      storageBucket: 'fir-apptracker.appspot.com',
      messagingSenderId: '45288074425'
    }
};
