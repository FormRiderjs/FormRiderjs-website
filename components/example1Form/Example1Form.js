import styles from "./example1Form.module.scss";

export default function Example1Form() {
  return (
    <form className={styles.form}>
      <div className={styles.title}>
        A subscribe form live testing <span className={styles.greenCircle} />
      </div>
      <div className={styles.subTitle}>This form is only for testing :)</div>
      <div className={styles.formInputsContainer}>
        <div>
          <input
            className={styles.textInput}
            type={"text"}
            placeholder={"Username (required)"}
          />
        </div>
        <div>
          <input
            className={styles.textInput}
            type={"text"}
            placeholder={"Password (required)"}
          />
        </div>
        <div>
          <input
            className={styles.submitButton}
            type={"submit"}
            value={"Test form"}
          />
        </div>
      </div>
    </form>
  );
}
