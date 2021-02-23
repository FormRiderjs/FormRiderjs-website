import Header from "../components/header/header";
import FundingBanner from "../components/fundingBanner/FundingBanner";
import Footer from "../components/footer/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={"theMotherOfAllContainers"}>
      <Header />
      <FundingBanner />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
