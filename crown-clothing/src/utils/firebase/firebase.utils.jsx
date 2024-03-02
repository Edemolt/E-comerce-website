import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { 
    getFirestore,  // to initialize the firestore
    doc, // retrive the documnets stored inside the database
    getDoc, // to get the document dta
    setDoc, // to set the dsocumnet data
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDhgYPI5JE3nd9NtoP7Fyu3TnYPFv_U8zQ",
    authDomain: "crwn-clothing-db-6edb3.firebaseapp.com",
    projectId: "crwn-clothing-db-6edb3",
    storageBucket: "crwn-clothing-db-6edb3.appspot.com",
    messagingSenderId: "609188320723",
    appId: "1:609188320723:web:4124eb188d013b94f24b26"
  };

  // Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // gives back the provider instance
provider.setCustomParameters({ //tel dufferent ways this google auth provider behaves
    prompt : 'select_account',

});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
}

export const db = getFirestore(); // entire firebase database accessed through db now

export const create_user_doc_from_auth = async (user_auth_object) => {
    console.log(user_auth_object);

    // we need to see if there is an existing document referrence
    const user_document_referrence = doc(db, 'users', user_auth_object.uid);

    console.log(user_document_referrence);

    const user_snapshot = await getDoc(user_document_referrence);
    // user_snapshot -> it is the data, also a specific kind of object
    console.log(user_snapshot);
    // on this are different ways we can use to see the document exists or not 
    console.log(user_snapshot.exists());
    // also allows us to access the data

    //psuedo code ->

    // if the data exists return  user_documewnt_refernce
    // if user data does not exists -> create/set the document with the given user data in the collection

    //if user data does not exists 👇
    if(!(user_snapshot.exists())){
        const {displayName, email} = user_auth_object;

        const created_at = new Date(); // we know when the user sugn in

        try{
            await setDoc(user_document_referrence, {displayName, email, created_at});
        }catch(error){
            console.log('there was an error creating the user', error.message);
        }
    }else{
        return user_document_referrence;
    }
}