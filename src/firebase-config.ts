import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBhWndIGt3SDRXOdkreXuL02uTt2cjxvKw",
    authDomain: "e-gadgets-3bf47.firebaseapp.com",
    projectId: "e-gadgets-3bf47",
    storageBucket: "e-gadgets-3bf47.appspot.com",
    messagingSenderId: "284570586251",
    appId: "1:284570586251:web:bcf0acbad1160f7472d88e",
    measurementId: "G-00VXD71M8J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
