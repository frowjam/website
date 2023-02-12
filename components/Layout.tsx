import Head from "next/head";
import { FunctionComponent, PropsWithChildren } from "react";
import Header from "./Header";
import styles from "./Layout.module.css";

export const siteTitle = "FrowJam";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/frowjam-icon.png" />
        <meta
          name="description"
          content="Regular acoustic Jam Sessions for musicians based around Forest Row."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;