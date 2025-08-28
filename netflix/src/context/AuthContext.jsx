import {useContext, createContext,useEffect, useState} from 'react'
import {auth} from '.firebase.js';
const AuthContext = createContext();
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,signOut,
     onAuthStateChanged 
    } from 'firebase/auth';
export function AuthContextProvider({children}) {
    const [user,setUser] = useState({});

     function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
     }
     function logOut(){
        return signOut(auth)
     }

     function signIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
         })
         return () => {
            unsubscribe();
         }
     },[])

    return(

        <AuthContext.Provider value={{signUp,user}}>
             {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}
