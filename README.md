
# Repository contents

An Angular 2 application for managing queues.


## Running the code
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## A note about Firebase Connectivity
A firebase.config.ts file has to be created in the src/app/environments folder.  This will handle connecting to your Firebase. It imports AuthMethods and AuthProviders from angularfire2, and exports two constants: firebaseConfig containing the configuration object for Firebase, and authConfig, containing auth provider and method.
