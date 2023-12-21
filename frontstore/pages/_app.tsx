import  Layout  from "../component/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../styles/index.scss";
import { RecoilRoot } from "recoil";
const MyApp = ({ Component, pageProps }: any) => {
  return (
      <RecoilRoot>
          <Layout>
            <Component classNames={styles.global} {...pageProps} />
          </Layout>
      </RecoilRoot>
  );
};

export default MyApp;
