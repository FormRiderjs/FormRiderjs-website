import Header from '../components/header/header';
import FundingBanner from '../components/fundingBanner/FundingBanner';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (

    <div>
    <Header/>
    <FundingBanner />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
