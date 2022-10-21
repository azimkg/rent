import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import acc from "../../assets/acc.svg";
import BaseModalWrapper from "../Autorization/BaseModalWrapper";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img className={styles.header__logoImg} src={logo} alt="" />
      </div>
      <div className={styles.header__right}>
        <div className={styles.header__user}>
          <button className={styles.user__btn}>Станьте хозяином</button>
        </div>
        <div onClick={toggleModal} className={styles.header__autorization}>
          <img src={acc} className={styles.autorization__link} />
        </div>
        <BaseModalWrapper
          isModalVisible={isModalVisible}
          onBackdropClick={toggleModal}
        />
      </div>
    </div>
  );
};

export default Header;
