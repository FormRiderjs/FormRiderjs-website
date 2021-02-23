import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className = {styles.footer}>
          <img src={"/brand.png"} className={styles.brand}></img>
          <div>
            FormRider.js, made with <img className={styles.love} src={"/like.png"}/> for the community by Sirage AL DBIYAT (<a href={"https://ilovesemicolons.io"} className={styles.linkToiLoveSemicolons}>iLoveSemicolons</a>)
          </div>
      </div>
    </div>
  );
}
