import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Cities from "../components/Cities";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Airbnb</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <Banner />
      <Cities />
      <Footer />
    </div>
  );
};

export default Home;
