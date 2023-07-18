import Layout from "../pages/layout";
import { AuthProvider } from "../contexts/AuthContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
};

export default MyApp;
