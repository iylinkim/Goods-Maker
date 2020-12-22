import React, {useEffect, useState} from "react";
import styles from "./login.module.css";

const Login = ({firebaseAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);

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
      firebaseAuth.login(email, password);
    }
  };

  const toggleAccount = () => {
    setNewAccount(prev => !prev);
  };

  const onSocialLogin = event => {
    firebaseAuth.socialLogin(event.target.name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2 className={styles.title}>LOGIN</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange} className={styles.input}
            required
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange} className={styles.input}
            required
          />
          <input
            type='submit'
            value={newAccount ? "Create Account" : "Log In"} className={`${styles.input} ${styles.submit}`}
          />
        </form>
        <div className={styles.social}>
          <button className={styles.button} name='Google' onClick={onSocialLogin}>
            Continue with Google
          </button>
          <button className={styles.button} name='Github' onClick={onSocialLogin}>
            Continue with Github
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
