import { useRef } from "react";

import styles from "./fundingBanner.module.scss";

export default function FundingBanner() {
  //the reference is put on the banner container
  const fundingBanner = useRef(null);

  //clearing out the banner when a funding button is clicked
  const clearOutTheBanner = function () {
    const banner = fundingBanner.current;
    banner.style.display = "none";
  };

  return (
    <div ref={fundingBanner} className={styles.fundingBannerSupContainer}>
      <div className={styles.fundingBannerContainer}>
        <div>
          Form Rider is free, consider funding to make it bigger and better
        </div>
        <div className={styles.fundingButtonsContainer}>
          <a
            onClick={clearOutTheBanner}
            href={"https://www.google.com"}
            className={styles.fundingButton}
          >
            I fund
          </a>
          <div onClick={clearOutTheBanner} className={styles.fundingButton}>
            No thank
          </div>
        </div>
      </div>
    </div>
  );
}
