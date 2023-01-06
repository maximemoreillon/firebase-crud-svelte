import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyAdp2YwweX93kIlLxnnCoa13t74RYYIQa8',
	authDomain: 'fir-crud-vue-4d77d.firebaseapp.com',
	projectId: 'fir-crud-vue-4d77d',
	storageBucket: 'fir-crud-vue-4d77d.appspot.com',
	messagingSenderId: '389740065764',
	appId: '1:389740065764:web:51c57dfe631e67bcc44df1',
	measurementId: 'G-S4MJDN29D5'
};
initializeApp(firebaseConfig);

export const currentUser = writable<any>(null);

getAuth().onAuthStateChanged((user) => {
	currentUser.set(user);
});
