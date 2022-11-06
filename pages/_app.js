import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/navbartop.scss"
import 'bulma/css/bulma.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
