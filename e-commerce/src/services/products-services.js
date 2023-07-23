import data from './productsData';
import { db } from '../../config/firebase';
import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
    getFirestore,
  } from 'firebase/firestore';


export const getAllProducts = async () => {
    // addProducts();
    const collectionRef = collection(db, 'product');
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
  };


export const getCartItems = async () => {
  const collectionRef = collection(db, 'cart');
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
};

export const handleAddToCart = async (item, variant) => {
  const {name, imageUrl} = item;
  const { price, volume, stocksLeft} = variant;
  const quantity = 1;
  const collectionRef = collection(db, 'cart');
  const newItemAdded = await addDoc(collectionRef, {name, imageUrl, price, volume, stocksLeft, quantity });
  return newItemAdded;
}

export const updateFavouriteStatus = async (productId, isFavourite) => {
    const firestore = getFirestore();
    const productRef = doc(firestore, 'product', productId); 
    await updateDoc(productRef, { isFavourite });
};

const deleteCollection = async (collectionPath) => {
  const collectionRef = collection(db, collectionPath);
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });
};

// const addProducts = async () => {
//     deleteCollection("product");
//     const docRef = collection(db, "product");
//     for (const product of data) {
//       await addDoc(docRef, product);
//     }
//   };
// addProducts();

