import React, {memo} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import FirebaseAuth from "firebaseAuth";
import FirebaseDatabase from "firebaseData";
import ImageFileInput from "components/image_file_input/image_file_input";
import ImageUploader from "imageUploader";
import "@fortawesome/fontawesome-free/js/all.js";

const firebaseAuth = new FirebaseAuth();
const fbDatabase = new FirebaseDatabase();
const imageUploader = new ImageUploader();
const ImageInput = memo(
  props => (
    <ImageFileInput {...props} imageUploader={imageUploader} />
  )
);

ReactDOM.render(
  <React.StrictMode>
    <App
      firebaseAuth={firebaseAuth}
      fbDatabase={fbDatabase}
      ImageInput={ImageInput}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
