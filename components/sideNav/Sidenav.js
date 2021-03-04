import { useEffect, useRef, useState } from "react";
import Link from "next/Link";
import styles from "./sideNav.module.scss";

//TODO validators and functionalities button fix
//TODO validators and functionalities icon rotate

function SideNav(props) {
  const sideNavRef = useRef();
  const validatorsContainerRef = useRef();
  const listArrowRef = useRef();
  const [validatorsSectionOpened, setOpen] = useState(true);

  //currently opened docs
  let currentlyOpenedSlug = props.currentlyOpenedSlug;

  useEffect(() => {
    const sideNav = sideNavRef.current;
    const validatorsContainer = validatorsContainerRef.current;

    //check all doc titles in sidenav, when the title has an idslug and holding the same slug as the url slug add a style class to it
    [...sideNav.childNodes].forEach((child) => {
      if (
        child.attributes.idslug &&
        child.attributes.idslug.value === currentlyOpenedSlug
      ) {
        child.classList.add(`${styles.currentlyOpenedDoc}`);
      }
      if (
        child.attributes.idslug &&
        child.attributes.idslug.value !== currentlyOpenedSlug
      ) {
        child.classList.remove(`${styles.currentlyOpenedDoc}`);
      }
    });

    //check all subtitles, if a subtitle has the same idslug as the url slug then currentlyOpneedSubDOc class will be added
    [...validatorsContainer.childNodes].forEach((child) => {
      if (child.attributes.idslug.value === currentlyOpenedSlug) {
        child.classList.add(`${styles.currentlyOpenedSubDoc}`);
      }
      if (child.attributes.idslug.value !== currentlyOpenedSlug) {
        child.classList.remove(`${styles.currentlyOpenedSubDoc}`);
      }
    });
  });

  //when a section is opened we add a display block and add rotate the arrow, when closed we do the opposite
  function opneSection() {
    let validatorsContainer = validatorsContainerRef.current;
    let listArrow = listArrowRef.current;
    console.log(listArrow);
    validatorsSectionOpened
      ? (validatorsContainer.style.display = "block", listArrow.classList.add(`${styles.listArrowRotated}`))
      : (validatorsContainer.style.display = "none", listArrow.classList.remove(`${styles.listArrowRotated}`));
    setOpen(!validatorsSectionOpened);
  }

  return (
    <nav className={styles.sideNavContainer}>
      <nav ref={sideNavRef} className={styles.sideNav}>
        <Link href={`/docs/introduction`}>
          <div idslug={"introduction"} className={styles.title}>
            Introduction
          </div>
        </Link>
        <Link href={`/docs/installation`}>
          <div idslug={"installation"} className={styles.title}>
            Installation
          </div>
        </Link>
        <Link href={`/docs/getting-started`}>
          <div idslug={"getting-started"} className={styles.title}>
            Getting Started
          </div>
        </Link>

        <Link href={`/docs/understanding-configurations-and-main-concepts`}>
          <div
            idslug={"understanding-configurations-and-main-concepts"}
            className={styles.title}
          >
            Understanding configurations and main concepts
          </div>
        </Link>

        {/* ====================================================================================== */}

        <div className={styles.titleWithSubTitles}>
          <div onClick={opneSection} className={styles.supTitleContainer}>
            Validators and functionalities
            <img
              ref={listArrowRef}
              className={styles.listArrowUnRotated}
              alt="list arrow"
              src={"/arrow.svg"}
            />
          </div>
          <div
            ref={validatorsContainerRef}
            className={styles.subTitleContainer}
          >
            <Link href="/docs/required">
              <div idslug={"required"} className={styles.subTitle}>
                required
              </div>
            </Link>
            <Link href="/docs/email">
              <div idslug={"email"} className={styles.subTitle}>
                email
              </div>
            </Link>
            <Link href="/docs/minLength">
              <div idslug={"minLength"} className={styles.subTitle}>
                minLength
              </div>
            </Link>
            <Link href="/docs/maxLength">
              <div idslug={"maxLength"} className={styles.subTitle}>
                maxLength
              </div>
            </Link>
            <Link href="/docs/containNumber">
              <div idslug={"containNumber"} className={styles.subTitle}>
                containNumber
              </div>
            </Link>
            <Link href="/docs/numberBiggerThan">
              <div idslug={"numberBiggerThan"} className={styles.subTitle}>
                numberBiggerThan
              </div>
            </Link>
            <Link href="/docs/numberSmallerThan">
              <div idslug={"numberSmallerThan"} className={styles.subTitle}>
                numberSmallerThan
              </div>
            </Link>
            <Link href="/docs/containSpecialCharacters">
              <div
                idslug={"containSpecialCharacters"}
                className={styles.subTitle}
              >
                containSpecialCharacters
              </div>
            </Link>
            <Link href="/docs/containWhiteSpace">
              <div idslug={"containWhiteSpace"} className={styles.subTitle}>
                containWhiteSpace
              </div>
            </Link>
            <Link href="/docs/containCapitalLetters">
              <div idslug={"containCapitalLetters"} className={styles.subTitle}>
                containCapitalLetters
              </div>
            </Link>
            <Link href="/docs/containSmallLetters">
              <div idslug={"containSmallLetters"} className={styles.subTitle}>
                containSmallLetters
              </div>
            </Link>
            <Link href="/docs/dateFormat">
              <div idslug={"dateFormat"} className={styles.subTitle}>
                dateFormat
              </div>
            </Link>
            <Link href="/docs/regexTest">
              <div idslug={"regexTest"} className={styles.subTitle}>
                regexTest
              </div>
            </Link>
          </div>
        </div>
        <Link href={`/docs/notifications`}>
          <div idslug={"notifications"} className={styles.title}>
            notifications
          </div>
        </Link>
        <Link href={`/docs/understanding-error-messages`}>
          <div idslug={"understanding-error-messages"} className={styles.title}>
            Understanding error messages
          </div>
        </Link>
      </nav>
    </nav>
  );
}

export default SideNav;
