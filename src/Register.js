import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./firebase";
import { updateCurrentUser, updateProfile, getAuth } from "firebase/auth";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password).then(() => {
            alert("Welcome " + name)
        });
    };

    useEffect(() => {
        if (loading) return;
    });
    return (
        <div className="register">
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button onClick={register}>
                    Register
                </button>
                <button
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? now.
                </div>
            </div>
        </div>
    )
}

export default Register;