import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRABASE_APIKEY,
    authDomain: process.env.REACT_APP_FIRABASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIRABASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIRABASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIRABASE_MASSEAGINGSENDERID,
    appId: process.env.REACT_APP_FIRABASE_APPID,
    measurementId: process.env.REACT_APP_FIRABASE_MEASUREMENTID
};

const firabaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firabaseApp);