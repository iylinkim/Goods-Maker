import Button from "components/button/button";
import React, {useRef, useState} from "react";
import styles from "./edit_form.module.css";

const EditForm = ({info, updateInfo, deleteInfo, ImageInput, fbDatabase}) => {
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

  const selectRef = useRef();
  const colorRef = useRef();

  
  return (
    <div className={styles.container}>
      <p></p>
      <form className={styles.form}>
        <i className={`fas ${getGoodsIcon(category)} ${styles.icon}`}></i>
        <select
          className={styles.select}
          ref={selectRef}
          onChange={onChange}
          name='category'
          value={category}>
          <option value='shirt'>shirt</option>
          <option value='cup'>cup</option>
          <option value='phone'>phone</option>
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
        {/* <input
          type='number'
          min='16'
          max='50'
          step='1'
          placeholder='font size'
        />
        <ul className={styles.colors}>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.black}`}
            name='black'></li>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.white}`}
            name='white'></li>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.red}`}
            name='red'></li>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.pink}`}
            name='pink'></li>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.orange}`}
            name='orange'></li>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.yellow}`}
            name='yellow'></li>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.green}`}
            name='green'></li>
          <li
            ref={colorRef}
            onClick={getColor}
            className={`${styles.color} ${styles.blue}`}
            name='blue'></li>
        </ul> */}
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
      return "fas fa-tshirt";
    case "cup":
      return "fas fa-coffee";
    case "phone":
      return "fas fa-mobile-alt";
    case "poster":
      return "fas fa-scroll";
  }
}

export default EditForm;
