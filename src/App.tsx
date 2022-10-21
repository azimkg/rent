import React from "react";
import "./App.css";
import styles from "./App.module.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
