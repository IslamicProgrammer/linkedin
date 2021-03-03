import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // the user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            dispayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {user ? (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
