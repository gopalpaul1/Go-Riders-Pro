import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig/firebaseConfig';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import './login.css'



const Login = () => {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        password:'',
        photo:'',
        error:'',
        success: false
    })

    // const signInClick = () => {
    //     firebase.auth().signInWithPopup(provider)
    //     .then(res => {

    //     const {displayName, email, photoURL} = res.user
    //     const signedIn = {
    //         isSignedIn: true,
    //         name: displayName,
    //         email: email,
    //         photo: photoURL
    //     }
    //     setUser(signedIn)

    //     })
    //     .catch(err => {
    //     console.log(err)
    //     })
    // }

    const handleBlur = e => {
        let isFieldValid = true;
        if(e.target.name === "email"){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
    
        if(e.target.name === "password"){
          const isPasswordValid = e.target.value.length > 6
          const isPasswordNumber =  /\d{1}/.test(e.target.value)
          isFieldValid = isPasswordValid && isPasswordNumber
        
        }
        if(isFieldValid){
          const newUserInfo = {...user}
          newUserInfo[e.target.name] = e.target.value
          setUser(newUserInfo)
        }
      }
    

    
    const updateUserName = name => {

        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name
        }).then(function() {
          console.log("user name signed successfully")
        }).catch(function(error) {
          console.log(error)
        });
    
    }


    const submitForm = (e) => {

        if(newUser && user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            const newUserInfo = {...user}
            newUserInfo.error = ''
            newUserInfo.success = true
            setUser(newUserInfo)
            setLoggedInUser(newUserInfo)
            updateUserName(user.name)
    
        })
        .catch((error) => {
          const newUserInfo = {...user}
          newUserInfo.error = error.message
          newUserInfo.success = false
          setUser(newUserInfo)
        });
        }
    
        if(!newUser && user.email && user.password){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = {...user}
          newUserInfo.error = ''
          newUserInfo.success = true
          setUser(newUserInfo)
          console.log("signed info", res.user)
          
        })
        .catch((error) => {
          const newUserInfo = {...user}
          newUserInfo.error = error.message
          newUserInfo.success = false
          setUser(newUserInfo)
          
        });
        }
    
        e.preventDefault()
    
    }


    const handleGoogleSignIn = () => {

        firebase.auth().signInWithPopup(provider)
        .then(res => {

        const {displayName, email, photoURL} = res.user
        const signedIn = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
        }
        setUser(signedIn)
        setLoggedInUser(signedIn)
        history.replace(from)


        })
        .catch(err => {
        console.log(err)
        })

        // firebase.auth().signInWithPopup(provider)
        // .then((result) => {
            
        //     const {displayName, email} = result.user;
        //     const signInUser = {name:displayName, email} 
        //     setLoggedInUser(signInUser)
        //     history.replace(from)

        // }).catch(error => {
        //     console.log(error)

        // });
    }
    
    return (
        <div className="formContainer">

            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" />
            <label htmlFor="newUser">New User Sign up</label>
            <form onSubmit={submitForm} className="FormContent">
                {newUser && <input type="text" className="InputFeild" onBlur={handleBlur} name="name" placeholder="Your Name" required />}
                <br/>
                <input type="text" className="InputFeild" onBlur={handleBlur} name="email" placeholder="Your Email" required />
                <br/>
                <input type="password" className="InputFeild" onBlur={handleBlur} name="password" placeholder="Your Password" required/>
                <br/>
                <input type="submit" className="Submit" value={newUser ? 'Sign up' : 'Login'}/>
            </form>
            <h4>Or</h4>
            <button className="googleSignIn" onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;
