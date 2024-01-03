import Layout from "../component/Layout";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "../styles/index.scss";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../component/Provider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Layout>
          <Component classNames={styles.global} {...pageProps} />
        </Layout>
      </AuthProvider>
    </RecoilRoot>
  );
};

export default MyApp;
