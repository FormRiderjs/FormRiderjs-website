import SideNav from "../components/sideNav/Sidenav";
import styles from "./docs.module.scss";
const Docs = () => (
  <div>
    <SideNav />
    <div className={styles.docsPageLayout}>
      <div className={styles.docsMainLayout}>
        <h1>introduction</h1>
      </div>
    </div>
  </div>
);

export default Docs;
