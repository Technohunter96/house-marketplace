import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCvbR6kzQFITSF3MYIT-iXzKY64Emo6m14",
   authDomain: "house-marketplace-app-b48c9.firebaseapp.com",
   projectId: "house-marketplace-app-b48c9",
   storageBucket: "house-marketplace-app-b48c9.appspot.com",
   messagingSenderId: "359627742758",
   appId: "1:359627742758:web:b329f222541be3a64690e7",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
