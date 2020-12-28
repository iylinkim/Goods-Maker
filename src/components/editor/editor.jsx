import AddForm from "components/add_form/add_form";
import EditForm from "components/edit_form/edit_form";
import React from "react";
import styles from "./editor.module.css";

const Editor = ({infos, ImageInput, updateInfo, addInfo, deleteInfo, fbDatabase}) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Editor</h2>
      {Object.keys(infos).map(info => (
        <EditForm
          key={info}
          info={infos[info]}
          ImageInput={ImageInput}
          updateInfo={updateInfo}
          deleteInfo={deleteInfo}
          fbDatabase={fbDatabase}
        />
      ))}
      <AddForm addInfo={addInfo} ImageInput={ImageInput}/>
    </section>
  );
};

export default Editor;
