import {useEffect, useRef } from "react";
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
        {docs.map((doc, i) => (
          <Link key={i} href={`/docs/${doc.slug}`}>
            <div idslug={doc.slug} className={styles.title}>
              {doc.title}
            </div>
          </Link>
        ))}
      </nav>
    </nav>
  );
}

export default SideNav;
