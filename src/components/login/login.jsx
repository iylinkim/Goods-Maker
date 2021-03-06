import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import styles from "./login.module.css";

const Login = ({authService, firebaseAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const history = useHistory();
  const goToHome = userId => {
    history.push({
      pathname:"/home",
      state: {id: userId},
    });
  };
  const onChange = event => {
    const {
      target: {name, value},
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    if (newAccount) {
      //Create Account
      firebaseAuth.createAccount(email, password);
    } else {
      //Log In
      firebaseAuth //
        .login(email, password)
        .then(data => goToHome(data.user.uid));
    }
  };

  const toggleAccount = () => {
    setNewAccount(prev => !prev);
  };

  const onSocialLogin = event => {
    firebaseAuth //
      .socialLogin(event.target.name)
      .then(data => goToHome(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthStateChanged(user => user && goToHome(user.uid));
  });

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2 className={styles.title}>
          {newAccount ? "CREATE ACCOUNT" : "LOG IN"}
        </h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
            className={styles.input}
            required
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            className={styles.input}
            required
          />
          <input
            className={`${styles.input} ${styles.submit}`}
            type='submit'
            value={newAccount ? "Create Account" : "Log In"}
          />
        </form>
        <div className={styles.social}>
          <button
            className={styles.button}
            name='Google'
            onClick={onSocialLogin}>
            Continue with Google
            <i>
              <img className={styles.icon} src='/images/google.png' alt='' />
            </i>
          </button>
          <button
            className={styles.button}
            name='Github'
            onClick={onSocialLogin}>
            Continue with Github
            <i>
              <img className={styles.icon} src='/images/github.png' alt='' />
            </i>
          </button>
        </div>
        <p className={styles.toggle} onClick={toggleAccount}>
          {newAccount ? "Log In" : "Create Account"}
        </p>
      </div>
    </div>
  );
};

export default Login;
