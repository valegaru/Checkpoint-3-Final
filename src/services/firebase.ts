import { initializeApp } from 'firebase/app';
import { getFirestore, updateDoc } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db
import { DataShapeRecord } from '../types/record';

const firebaseConfig = {
	apiKey: 'AIzaSyBYbGMD0aW7X5vbeJ2jSI9oZfm57ltn1QI',
	authDomain: 'labs-9a0f6.firebaseapp.com',
	projectId: 'labs-9a0f6',
	storageBucket: 'labs-9a0f6.appspot.com',
	messagingSenderId: '909162520072',
	appId: '1:909162520072:web:6c5a6b47b5d7145472bbbd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addRecord = async (movie: Omit<DataShapeRecord, 'id'>) => {
	try {
		const where = collection(db, 'records');
		await addDoc(where, movie);
		console.log('se añadió con éxito');
	} catch (error) {
		console.error(error);
	}
};

export const getRecord = async () => {
	const querySnapshot = await getDocs(collection(db, 'records'));
	const transformed: Array<DataShapeRecord> = [];

	querySnapshot.forEach((doc) => {
		const data: Omit<DataShapeRecord, 'id'> = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});
	return transformed;
};

export const updateRecord = async (recordId: string, data: any) => {
	const userRef = doc(db, 'records', recordId);

	try {
		await updateDoc(userRef, data);
		alert('Información actualizada exitosamente');
	} catch (error) {
		console.error('Error actualizando el usuario: ', error);
		alert('Hubo un error al actualizar la información. Inténtalo de nuevo.');
	}
};

export default {
    addRecord,
    getRecord,
	updateRecord,
}