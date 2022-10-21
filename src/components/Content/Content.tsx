import * as React from "react";
import styles from "./Content.module.scss";

export interface IAppProps {}

export default class Content extends React.Component<IAppProps> {
  public render() {
    return (
      <div className={styles.contentBlock}>
        <div className={styles.content}>
          <div className={styles.contentForm}>
            <div className={styles.formContent}>
              <label htmlFor="where" className={styles.labelContent}>
                Куда
              </label>
              <input
                placeholder="Город, аэропорт, адрес или отель"
                className={styles.inputContent}
              />
            </div>
            <div className={styles.formContent}>
              <label htmlFor="From" className={styles.labelContent}>
                Когда
              </label>
              <input placeholder="" className={styles.inputContent} />
            </div>
            <div className={styles.formContent}>
              <label htmlFor="From" className={styles.labelContent}>
                До какого
              </label>
              <input placeholder="" className={styles.inputContent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
