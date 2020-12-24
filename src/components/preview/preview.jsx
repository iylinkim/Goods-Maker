import Goods from "components/goods/goods";
import React from "react";
import styles from "./preview.module.css";

const Preview = ({infos}) => (
  <section className={styles.preview}>
      <h2 className={styles.title}>Preview</h2>
    <ul>
      {Object.keys(infos).map(info => {
        return <Goods key={info} info={infos[info]} />;
      })}
    </ul>
  </section>
);

export default Preview;
