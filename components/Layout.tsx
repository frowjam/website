import Head from "next/head"
import { FunctionComponent, PropsWithChildren } from "react"
import Header from "./Header"

export const siteTitle = "FrowJam"

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
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
      <Header />
      <div className="my-0 mx-auto max-w-4xl px-4 py-0">
        <main>{children}</main>
        <footer className="font-serif mb-4">
          © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

export default Layout
