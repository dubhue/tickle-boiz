import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DraftRoom from "../components/Draft/DraftRoom";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tickle Boiz 2022</title>
        <meta name="description" content="Tickle Boiz Draft Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DraftRoom />
    </div>
  );
};

export default Home;
