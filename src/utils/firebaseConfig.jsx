import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDAaJawJ1U_RI_EsWG2PiQJm81IMSfczFk",
	authDomain: "az-tronics.firebaseapp.com",
	databaseURL: "https://az-tronics-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "az-tronics",
	storageBucket: "az-tronics.firebasestorage.app",
	messagingSenderId: "37007145291",
	appId: "1:37007145291:web:2a1c1009e841514d0150ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;