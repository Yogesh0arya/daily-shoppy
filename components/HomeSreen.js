import React from "react";
import ProductFeed from "./ProductFeed";
import HeroScreen from "./HeroScreen";
import Footer from "./Footer";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"), { ssr: false });

function HomeSreen({ data }) {
  return (
    <div className="pt-8">
      <Header />
      <HeroScreen />
      <ProductFeed products={data} />
      <Footer />
    </div>
  );
}

export default HomeSreen;
