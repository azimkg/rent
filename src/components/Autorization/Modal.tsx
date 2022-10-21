import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Autorization.module.scss";
import close from "../../assets/close.svg";

export interface ModalProps {
  onBackdropClick: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onBackdropClick }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return ReactDOM.createPortal(
    <div onClick={onBackdropClick}>
      <div>
        <div className={styles.modal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.modal__block}
          >
            <div className={styles.modal__content}>
              <img
                onClick={onBackdropClick}
                className={styles.modalClose}
                src={close}
              />
              <h1 className={(styles.welcome, "cormorant")}>
                Добро Пожаловать
              </h1>
              <form className={styles.form}>
                <div className={styles.formBlock}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email
                  </label>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formBlock}>
                  <label htmlFor="Password" className={styles.formLabel}>
                    Password
                  </label>
                  <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <button className={styles.buttonParent}>Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modal__inner}></div>
    </div>,
    document.getElementById("modal-root")!
  );
};
