import LayoutHomePage from "../components/layoutHomePage/LayoutHomePage";
import SingleWhy from "../components/singleWhy/SingleWhy";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.topBannerContainer}>
        <div className={styles.topBanner}>
          <div>
            <img
              src={"/brand.png"}
              className={styles.topBannerBrand}
              alt="From Rider logo home page"
            />
          </div>
          <div>
            <div>
              <div className={styles.topBannerText}>FormRider.js</div>
              <div className={styles.topBannerText}>
                A Javascript form validation plugin, based on JSON
              </div>
            </div>
            <div>
              <div className={styles.topBannerButtonsContainer}>
                <div className={styles.topBannerButton}>Get Started</div>
                <div className={styles.topBannerButton}>Download</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LayoutHomePage>
        <div>
          <div>Why using FormRirder.js</div>
          <div>
            <SingleWhy
              reason={"Automatic Code Loading"}
              explanation={
                "Only necessary validators are loaded, resulting in a fast loading time."
              }
            />
            <SingleWhy
              reason={"No Coding"}
              explanation={
                "No code typing other than adding HTML attributes and editing a JSON document."
              }
            />
            <SingleWhy
              reason={"No dependencies"}
              explanation={
                "Since Form Rider is coded using vanilla javascript, you won't worry about other dependecies."
              }
            />
            <SingleWhy
              reason={"Maintained & Documented"}
              explanation={
                "Form Rider documentation is constantly scanned and the library is continuously updated for better performance"
              }
            />
            <SingleWhy
              reason={"Open Source"}
              explanation={
                "Join the Slakc channel, give new ideas or code it your self, feel free to add new notification designs to the library ! :)"
              }
            />
            <SingleWhy
              reason={"Automatic Code Loading"}
              explanation={
                "Form Rider size is only 128kb."
              }
            />
          </div>
        </div>
      </LayoutHomePage>
    </div>
  );
}
