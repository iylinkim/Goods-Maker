import AppRouter from "components/routes";
import {useState, useEffect} from "react";
import styles from "app.module.css";
import {authService} from "fbase";

function App({firebaseAuth, ImageInput, fbDatabase}) {
  const [init, setInit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setInit(true);
    });
  });
  return (
    <section>
      {init ? (
        <AppRouter
          loggedIn={loggedIn}
          firebaseAuth={firebaseAuth}
          ImageInput={ImageInput}
          fbDatabase={fbDatabase}
        />
      ) : (
        <img
          className={styles.loading}
          src='/images/page_loading.gif'
          alt='page loading'
        />
      )}
    </section>
  );
}

export default App;
