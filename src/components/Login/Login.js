import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { auth } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    console.log(typeof email);
    if (!name) {
      alert('Please enter full name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          );
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) =>
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        )
      )
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img className="login__img" src={logo} alt="logo" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Fullname (required if registering)"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic Url (optional)"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member ?
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
