import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initAuth } from '../Firebase/initAuth';

initAuth();

export const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signWithGoogle = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    const signWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                updateProfile(auth.currentUser, {
                    displayName: `${name && name}`,
                    photoURL: `${name && "/assets/img/avator.png"}`
                }).then(() => { }).catch(error => setError(error.message))
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
        // .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user)
                setUser(user);
            else
                setUser({});
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        error,
        isLoading,
        name,
        email,
        password,
        setPassword,
        setEmail,
        setName,
        logOut,
        signWithGoogle,
        signWithEmail
    }
}
