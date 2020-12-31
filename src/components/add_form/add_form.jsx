import Button from "components/button/button";
import React, {useRef, useState, memo} from "react";
import styles from "./add_form.module.css";

const AddForm = memo(({ImageInput, addInfo}) => {
  const formRef = useRef();
  const categoryRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const sizeRef = useRef();

  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const info = {
      id: Date.now(),
      category: categoryRef.current.value || "",
      title: titleRef.current.value || "",
      text: textRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
      // fontSize: sizeRef.current.value || "",
      // fontColor: color || "",
    };

    formRef.current.reset();
    setFile({fileName: null, fileURL: null});
    addInfo(info);
  };
  return (
    <div className={styles.container}>
      <form ref={formRef} className={styles.form}>
        <i
          className={`fas fa-question-circle ${styles.icon} 
          ${getGoodsIcon(categoryRef)}`}></i>
        <select ref={categoryRef} className={styles.select} name='category'>
          <option value='shirt'>shirt</option>
          <option value='cup'>cup</option>
          <option value='phone'>phone</option>
          <option value='poster'>poster</option>
        </select>
        <input
          ref={titleRef}
          className={styles.input}
          type='text'
          name='title'
          placeholder='title'
        />
        <textarea
          ref={textRef}
          className={styles.textarea}
          name='text'
          placeholder='text'></textarea>
        {/* <input
          ref={sizeRef}
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
            onClick={getColor}
            className={`${styles.color} ${styles.white}`}
            name='white'></li>
          <li
            onClick={getColor}
            className={`${styles.color} ${styles.red}`}
            name='red'></li>
          <li
            onClick={getColor}
            className={`${styles.color} ${styles.pink}`}
            name='pink'></li>
          <li
            onClick={getColor}
            className={`${styles.color} ${styles.orange}`}
            name='orange'></li>
          <li
            onClick={getColor}
            className={`${styles.color} ${styles.yellow}`}
            name='yellow'></li>
          <li
            onClick={getColor}
            className={`${styles.color} ${styles.green}`}
            name='green'></li>
          <li
            onClick={getColor}
            className={`${styles.color} ${styles.blue}`}
            name='blue'></li>
        </ul> */}
        <div className={styles.button}>
          <ImageInput name={file.fileName} onFileChange={onFileChange} />
        </div>
        <Button name='Add' onClick={onSubmit} />
      </form>
    </div>
  );
});

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

export default AddForm;
