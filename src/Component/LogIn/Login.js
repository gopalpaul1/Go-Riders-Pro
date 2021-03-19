import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig/firebaseConfig';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import './login.css'



const Login = () => {

    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
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
          setLoggedInUser(newUserInfo)
        });
        }
    
        if(!newUser && user.email && user.password){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = {...user}
          newUserInfo.error = ''
          newUserInfo.success = true
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          console.log("signed info", res.user)
          
        })
        .catch((error) => {
          const newUserInfo = {...user}
          newUserInfo.error = error.message
          newUserInfo.success = false
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          
        });
      }
    
        e.preventDefault()
    
    }


    const handleGoogleSignIn = () => {

        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {

        const {displayName, email, photoURL} = result.user
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
        .catch(error => {
        console.log(error)
        })

    }

    const handleFacebookSignIn = () => {
      firebase.auth().signInWithPopup(facebookProvider)
      .then(result => {
        
      const {displayName, email, photoURL} = result.user
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
      .catch(error => {
      console.log(error)
      })

    }
    
    return (
        <div className="formContainer">
            <form onSubmit={submitForm} className="FormContent">
                {newUser && <input type="text" className="InputFeild" onBlur={handleBlur} name="name" placeholder="Your Name" required />}
                <br/>
                <input type="text" className="InputFeild" onBlur={handleBlur} name="email" placeholder="Your Email" required />
                <br/>
                <input type="password" className="InputFeild" onBlur={handleBlur} name="password" placeholder="Your Password" required/>
                <br/>
                <input type="submit" className="Submit" value={newUser ? 'Sign up' : 'Login'} />
            </form>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" />
            <label htmlFor="newUser">Create an account</label>
            <h4>Or</h4>
            <button className="googleSignIn" onClick={handleGoogleSignIn}>Continue with Google</button>
            <br/><br/>
            <button className="googleSignIn" onClick={handleFacebookSignIn}>Continue with Facebook</button>
        </div>
    );
};

export default Login;
