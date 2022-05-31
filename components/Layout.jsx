import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>guitar - {page}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;