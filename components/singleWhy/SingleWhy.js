import styles from "./singleWhy.module.scss";

export default function SingleWhy(props) {
  return (
    <div className={styles.singleWhyContainer}>
      <div>
        <span className={styles.reason}>{props.reason}</span> <span className={styles.reasonBar} />
      </div>
      <div className={styles.explanation}>{props.explanation}</div>
    </div>
  );
}
