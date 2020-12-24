import Editor from "components/editor/editor";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import Preview from "components/preview/preview";
import React, {useState} from "react";
import styles from "./home.module.css";

const Home = ({firebaseAuth, ImageInput}) => {
  const [infos, setInfos] = useState({});

  const createOrUpdateInfo = info => {
    setInfos(infos => {
      const updated = {...infos};
      updated[info.id] = info;
      return updated;
    });
  };

  const deleteInfo = info => {
    setInfos(infos => {
      const updated = {...infos};
      delete updated[info.id];
      return updated;
    });
  };
  return (
    <div className={styles.container}>
      <Header firebaseAuth={firebaseAuth}/>
      <section className={styles.contents}>
        <Editor
          infos={infos}
          ImageInput={ImageInput}
          updateInfo={createOrUpdateInfo}
          addInfo={createOrUpdateInfo}
          deleteInfo={deleteInfo}
        />
        <Preview infos={infos} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
