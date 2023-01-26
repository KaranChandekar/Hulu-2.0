import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Results */}
    </div>
  );
};

export default index;
