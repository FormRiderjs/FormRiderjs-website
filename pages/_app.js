import Header from "../components/header/header";
// import FundingBanner from "../components/fundingBanner/FundingBanner";
import Footer from "../components/footer/Footer";
import "../styles/globals.scss";
import Meta from "../components/meta/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Meta />
    <div className={"theMotherOfAllContainers"}>
      <Header />
      {/* <FundingBanner /> */}
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  );
}

export default MyApp;
