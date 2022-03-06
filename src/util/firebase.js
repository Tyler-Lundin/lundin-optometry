import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD7yBSXnQUfo297kba7byspBq6zIDdMxrY",
    authDomain: "lundin-optometry.firebaseapp.com",
    databaseURL: "https://lundin-optometry-default-rtdb.firebaseio.com",
    projectId: "lundin-optometry",
    storageBucket: "lundin-optometry.appspot.com",
    messagingSenderId: "658408455368",
    appId: "1:658408455368:web:6d8c2b84fcf9a89f1eb9fd",
    measurementId: "G-D91P91C54W"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);