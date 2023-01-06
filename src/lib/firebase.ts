import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyAdp2YwweX93kIlLxnnCoa13t74RYYIQa8',
	authDomain: 'fir-crud-vue-4d77d.firebaseapp.com',
	projectId: 'fir-crud-vue-4d77d',
	storageBucket: 'fir-crud-vue-4d77d.appspot.com',
	messagingSenderId: '389740065764',
	appId: '1:389740065764:web:c10c5ec631afa472c44df1',
	measurementId: 'G-0L4J1DMNNL'
};
initializeApp(firebaseConfig);

export const currentUser = writable<any>(null);

getAuth().onAuthStateChanged((user) => {
	currentUser.set(user);
});
