import Editor from "components/editor/editor";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import Preview from "components/preview/preview";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import styles from "./home.module.css";

const Home = ({firebaseAuth, fbDatabase, ImageInput}) => {
  const {location:{state:{id}}} = useHistory(); //history에 저장된 state안의 id
  const [infos, setInfos] = useState({});
  const [userId, setUserId] = useState(id && id);

  const createOrUpdateInfo = info => {
    setInfos(infos => {
      const updated = {...infos};
      updated[info.id] = info;
      return updated;
    });
    
    fbDatabase.saveGoods(userId, info);
  };

  const deleteInfo = info => {
    setInfos(infos => {
      const updated = {...infos};
      delete updated[info.id];
      return updated;
    });

    fbDatabase.deleteGoods(userId, info);
  };

  useEffect(() => {
    if(!userId){
      return;
    }

    const stopSync = fbDatabase.syncGoods(userId, infos => {
      setInfos(infos);
    });
    return () => stopSync();
  }, [userId]);
  return (
    <div className={styles.container}>
      <Header firebaseAuth={firebaseAuth} />
      <section className={styles.contents}>
        <Editor
          infos={infos}
          ImageInput={ImageInput}
          updateInfo={createOrUpdateInfo}
          addInfo={createOrUpdateInfo}
          deleteInfo={deleteInfo}
          fbDatabase={fbDatabase}
        />
        <Preview infos={infos} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
