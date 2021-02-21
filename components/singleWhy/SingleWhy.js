import styles from "./singleWhy.module.scss";

export default function SingleWhy(props) {
  return (
    <div className={styles.singleWhyContainer}>
      <div className={styles.reasonContainer}>
        <span className={styles.reason}>{props.reason}</span>
        <div
          style={{
            background: props.reasonBarColor,
            color: props.reasonBarColor,
            borderBottomColor: props.reasonBarColor,
          }}
          className={styles.reasonBar}
        />
      </div>
      <div className={styles.explanation}>{props.explanation}</div>
    </div>
  );
}
