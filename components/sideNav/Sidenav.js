import { useEffect, useRef } from "react";
import Link from "next/Link";
import styles from "./sideNav.module.scss";

function SideNav(props) {
  //get the docs props declared in docs page
  let docs = props.docs;

  //currently opened docs
  let currentlyOpenedSlug = props.currentlyOpenedSlug;

  const sideNavRef = useRef();

  useEffect(() => {
    const sideNav = sideNavRef.current;
    //check all doc titles in sidenav, when the title holding the same slug as the url slug add a style class to it
    [...sideNav.childNodes].forEach((child) => {
      if (child.attributes.idslug.value === currentlyOpenedSlug) {
        child.classList.add(`${styles.currentlyOpenedDoc}`);
      }
      if (child.attributes.idslug.value !== currentlyOpenedSlug) {
        child.classList.remove(`${styles.currentlyOpenedDoc}`);
      }
    });
  });

  return (
    <nav className={styles.sideNavContainer}>
      <nav ref={sideNavRef} className={styles.sideNav}>
      <Link href={`/docs/introduction`}>
          <div idslug={"introduction"} className={styles.title}>
            Introduction
          </div>
        </Link>
        <Link href={`/docs/getting-started`}>
          <div idslug={"getting-started"} className={styles.title}>
            Getting Started
          </div>
        </Link>
        <Link href={`/docs/understanding-configurations-and-main-concepts`}>
          <div idslug={"understanding-configurations-and-main-concepts"} className={styles.title}>
          Understanding configurations and main concepts
          </div>
        </Link>
        <Link href={`/docs/validators-and-functionalities`}>
          <div idslug={"validators-and-functionalities"} className={styles.title}>
          Validators and functionalities
          </div>
        </Link>
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

  /*   return (
    <nav className={styles.sideNavContainer}>
      <nav ref={sideNavRef} className={styles.sideNav}>
        {docs.map((doc, i) => (
          <Link key={i} href={`/docs/${doc.slug}`}>
            <div idslug={doc.slug} className={styles.title}>
              {doc.title}
            </div>
          </Link>
        ))}
      </nav>
    </nav>
  ); */
}

export default SideNav;
