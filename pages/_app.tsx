import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import landscape from "../public/maxresdefault.jpg";
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Layout>
          <Head>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap" rel="stylesheet" />
          </Head>
          <main>
              <Component {...pageProps} />
          </main>
          <Image src={landscape} width={500} height={350} placeholder="blur" />
      </Layout>
  )
}

export default MyApp;
