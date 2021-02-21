import LayoutHomePage from "../components/layoutHomePage/LayoutHomePage";
import SingleWhy from "../components/singleWhy/SingleWhy";
import Example1Form from "../components/example1Form/Example1Form";
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
        {/* WHY USING ============================================================ */}
        <div className={styles.whyUsingTitle}>Why using FormRirder.js</div>
        <div className={styles.whyRowContainer}>
          <SingleWhy
            reason={"Automatic Code Loading"}
            explanation={
              "Only necessary validators are loaded, resulting in a fast loading time."
            }
            reasonBarColor={"#4568DC"}
          />
          <SingleWhy
            reason={"No Coding"}
            explanation={
              "No code typing other than adding HTML attributes and editing a JSON document."
            }
            reasonBarColor={"#FFCB26"}
          />
          <SingleWhy
            reason={"No dependencies"}
            explanation={
              "Since Form Rider is coded using vanilla javascript, you won't worry about other dependecies."
            }
            reasonBarColor={"#50CF96"}
          />
        </div>
        <div className={styles.whyRowContainer}>
          <SingleWhy
            reason={"Maintained & Documented"}
            explanation={
              "Form Rider documentation is constantly scanned and the library is continuously updated for better performance"
            }
            reasonBarColor={"#FF512F"}
          />
          <SingleWhy
            reason={"Open Source"}
            explanation={
              "Join the Slakc channel, give new ideas or code it your self, feel free to add new notification designs to the library ! :)"
            }
            reasonBarColor={"#4D4D4D"}
          />
          <SingleWhy
            reason={"Automatic Code Loading"}
            explanation={"Form Rider size is only 128kb."}
            reasonBarColor={"#E56C6C"}
          />
        </div>
        {/* EXAMPLE 1 ============================================================ */}
        <div className={styles.example1Container}>
          <div className={styles.example1LeftContainer}>
            <div className={styles.example1LeftContainerTitle}>
              Don't go into boring coding.
            </div>
            <div>
              Form Rider has many validation functionalities, starting from
              basic validators such as "required" till "regex" and conditional
              validators --LINK HERE--
            </div>
            <div className={styles.example1Form}>
              <Example1Form />
            </div>
          </div>
          <div className={styles.example1RightContainer}>
            {/*             <textarea
              readOnly
              className={styles.example1TextArea}
            ></textarea> */}

            <div className={styles.example1TextArea}>
              <code>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.Contrary to popular belief, Lorem Ipsum is
                not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32.
              </code>
            </div>
          </div>
        </div>
      </LayoutHomePage>
    </div>
  );
}
