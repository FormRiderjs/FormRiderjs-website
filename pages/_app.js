import Header from '../components/header/header';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (

    <div>
    <Header/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
