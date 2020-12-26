import Button from "components/button/button";
import ImageFileInput from "components/image_file_input/image_file_input";
import React, {useState} from "react";
import styles from "./edit_form.module.css";

const EditForm = ({info, updateInfo, deleteInfo, ImageInput}) => {
  const {category, title, text, fileName} = info;
  const onChange = event => {
    if (event.currntTarget === null) {
      return;
    }
    event.preventDefault();
    updateInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const onFileChange = file => {
    updateInfo({
      ...info,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    deleteInfo(info);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <i className={`fas ${getGoodsIcon(category)} ${styles.icon}`}></i>
        <select
          className={styles.select}
          onChange={onChange}
          name='category'
          value={category}>
          <option value='shirt'>shirt</option>
          <option value='cup'>cup</option>
          <option value='phone case'>phone</option>
          <option value='poster'>poster</option>
        </select>
        <input
          className={styles.input}
          type='text'
          name='title'
          value={title}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          name='text'
          value={text}
          onChange={onChange}></textarea>
        <div className={styles.button}>
          <ImageInput name={fileName} onFileChange={onFileChange} />
        </div>
        <Button name='Delete' onClick={onSubmit} />
      </form>
    </div>
  );
};

function getGoodsIcon(item) {
  switch (item) {
    case "shirt":
      return "fa-tshirt";
    case "cup":
      return "fa-coffee";
    case "phone":
      return "fa-mobile-alt";
    case "poster":
      return "fa-scroll";
  }
}

export default EditForm;
