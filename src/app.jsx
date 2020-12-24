import AppRouter from "components/routes";
import {useState, useEffect} from "react";
import "./app.css";
import {authService} from "fbase";

function App({firebaseAuth, ImageInput}) {
  
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
        <AppRouter loggedIn={loggedIn} firebaseAuth={firebaseAuth} ImageInput={ImageInput}/>
      ) : (
        "Initializing..."
      )}
    </section>
  );
}

export default App;
