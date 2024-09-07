import React from "react";

import styles from "./index.module.css";

interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>111</div>
      <div className={styles.bottom}>222</div>
    </div>
  );
}
