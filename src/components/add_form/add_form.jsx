import Button from "components/button/button";
import ImageFileInput from "components/image_file_input/image_file_input";
import React, {useRef, useState} from "react";
import styles from "./add_form.module.css";

const AddForm = ({ImageInput, addInfo}) => {
  const formRef = useRef();
  const categoryRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();

  console.log(categoryRef.current.value);

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
    };

    formRef.current.reset();
    setFile({fileName: null, fileURL: null});
    addInfo(info);
  };
  return (
    <div className={styles.container}>
      <form ref={formRef} className={styles.form}>
        <i className={`fas fa-question-circle ${styles.icon} ${getGoodsIcon(categoryRef)}`}></i>
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
        <div className={styles.button}>
          <ImageInput name={file.fileName} onFileChange={onFileChange} />
        </div>
        <Button name='Add' onClick={onSubmit} />
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

export default AddForm;
