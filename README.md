# \<medium-firebase-proxy\>

Medium does not offer an API to retrieve your medium stories. 

Luckily https://medium.com/@jalalio/latest?format=json returns json.

The problems: 

1. Medium prevents JSON hacking by putting this string in the beginning of the json `])}while(1);</x>`
2. They don't allow cross domain calls so our AJAX response gets rejected in the browser

The solution: A firebase function which fetches the medium URL and returns a nice JSON string.

## 1. Add a firebase project
Create a new project or add later to an existing one.
https://console.firebase.google.com

## 2. Install firebase CLI
```
npm install -g firebase-tools
```
[See docs](https://github.com/firebase/firebase-tools#installation)

## 3. Clone this repo
```
git clone https://github.com/JaySunSyn/medium-firebase-proxy
cd medium-firebase-proxy
```

## 4. Add your medium username
open `functions/index.js`
replace `YOUR_MEDIUM_USERNAME` with your actual username

## 5. Add your Firebase project id
open `.firebaserc`
replace `YOUR_FIREBASE_PROJECT_ID` with your project id

## 5. Deploy
```
firebase deploy
```

## 6. Copy function URL
go to https://console.firebase.google.com/u/0/project/YOUR_FIREBASE_PROJECT_ID/functions/list
copy the URL listed under the `medium` function.
e.g. https://us-central1-my-app.cloudfunctions.net/medium

## 7. Use the URL
e.g. in the [medium-stories-element](https://github.com/JaySunSyn/medium-stories/)
