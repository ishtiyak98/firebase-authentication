import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import React, { useState } from 'react';
import LoginApp from '../LoginApp/LoginApp';
import app from "../../firebase.init";

const auth = getAuth(app);

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [passErrorMsg, setPassErrorMsg] = useState('');
    const [registered, setRegistered] = useState(true);

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }

    const handleName = (event)=>{
        setName(event.target.value);
    }

    const handleSubmit= ()=>{
        if(email === '') {
        setEmailErrorMsg('Email field is empty!');
        }
        if(name ===''){
        setNameErrorMsg('name field is empty!');
        }
        if(password.length === 0){
        setPassErrorMsg('Password field is empty!')
        }
        else{
        setEmailErrorMsg('');
        setPassErrorMsg('');

        if (registered === false) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((result)=>{
            const user = result.user;
            updateName();
            emailVerification();
            console.log(user);
            })
            .catch( (error) =>{
            console.error(error);
            alert(error.message);
            })
        }
        else if(registered === true){
            signInWithEmailAndPassword(auth, email, password)
            .then(res=>{
            const user = res.user;
            console.log(user);
            })
            .catch( (error) =>{
            console.error(error);
            alert(error.message);
            })
        }
        }
    }

    //!------------- Update Name ------------
    const updateName = ()=>{
        updateProfile(auth.currentUser, {
        displayName: name
        }).then(() => {
        console.log("name updated");
        }).catch((error) => {
        alert(error);
        });
    }

    //!------------- Email Verification ------------
    const emailVerification = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
        console.log("email veri sent");
        });
    }

    //!------------- Reset Password-----------------
    const resetPass = ()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
        console.log("Password reset email sent!");
        })
        .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        });
    }

    //!------------- Handle Registered State -----------------
    const handleRegistered = ()=>{
        if(registered === false){
        setRegistered(true);
        }
        else if(registered === true){
        setRegistered(false);
        }
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gray-300 text-gray-800'>
            <div className='w-4/5 md:w-1/2 lg:w-1/3'>
                <div className='bg-white border-l-8 border-l-indigo-600 rounded-lg px-8 py-6'>
                <h2 className='text-3xl mb-4 font-semibold font-mono text-center text-indigo-600'>{!registered ? 'Signup': 'Login'}</h2>
                {
                    !registered && <>
                                    <label className='mb-1 block font-semibold text-lg'>Username</label>
                                    <input onBlur={handleName} className='block border rounded-md w-full px-3 py-2 mb-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600' type="text" placeholder='Username'/>
                                    <div className="mb-0 text-sm text-right text-red-500 font-semibold">
                                    {nameErrorMsg}
                                    </div>
                                </>  
                }
                <label className='mb-1 block font-semibold text-lg mt-3'>Email</label>
                <input onBlur={handleEmail} className='block border rounded-md w-full px-3 py-2 mb-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600' type="text" placeholder='Email'/>
                <div className="mb-0 text-sm text-right text-red-500 font-semibold">
                    {emailErrorMsg}
                </div>
                <label className='mb-1 block font-semibold text-lg mt-3'>Password</label>
                <input onBlur={handlePassword} className='block border rounded-md w-full px-3 py-2 mb-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600' type="password" placeholder='Password'/>
                <div className="mb-0 text-sm text-right text-red-500 font-semibold">
                    {passErrorMsg}
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <button onClick={handleSubmit} className='bg-indigo-600 text-white px-10 py-2 rounded-md hover:bg-indigo-800'>{ !registered ? "Signup" : "Login"}</button>
                    {registered && <button onClick={resetPass} className='font-medium hover:text-indigo-600'>Forgot Password?</button>}
                </div>
                <div className="mt-6 text-center">
                    {
                    !registered ? <p>Already have an account? <button onClick={handleRegistered} className="text-indigo-600 font-semibold">Login</button></p> : <p>Don't have an account? <button onClick={handleRegistered} className="text-indigo-600 font-semibold">Signup</button></p>
                    }
                </div>
                <div>
                    <LoginApp></LoginApp>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;