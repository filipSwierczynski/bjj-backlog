import '../styles/globals.css';
import Navigation from '../components/Navigation'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
