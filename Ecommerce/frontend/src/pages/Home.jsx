import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <main className="min-h-screen bg-[#f5ebe0]">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <Subscribe />
    </main>
  );
}

export default Home;
