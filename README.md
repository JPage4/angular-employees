# angular-employees
First assignment learning Angular. Lots of refactoring was done on this project after we started using angular-route.

Then we will add app/app.config.js to our .gitignore so the keys don't get pushed to github. In the app folder we will create a app.config.js.example file that looks like this:

<!-- app.constant("FIREBASE_CONFIG", {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
}) -->
We will not add this to our .gitignore. This way if anyone pulls our code down all they need to do is rename the file to app.config.js and add in their firebase credentials and they will be good to run the project.