import React, {useRef, useState} from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({name, imageUploader, onFileChange}) => {
  
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.buttons}>
      <input
        className={styles.input}
        ref={inputRef}
        type='file'
        name='file'
        accept='image/*'
        onChange={onChange}
      />
      {loading ? (
        <button className={styles.loading}></button>
      ) : (
        <button className={`${styles.file} ${name ? styles.purple : styles.grey}`} onClick={onButtonClick}>
          {name || "No file"}
        </button>
      )}
    </div>
  );
};

export default ImageFileInput;
