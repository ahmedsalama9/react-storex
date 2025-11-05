import React from "react";
import ByCategory from "../Components/ByCategory";
import Category from "../Components/Category";
import Hero from "../Components/Hero";
import LatestProducts from "../Components/LatestProducts";

function Home() {
  return(
    <main>
      <Hero/>
      <Category/>
      <LatestProducts/>
      <ByCategory/>
    </main>
  );
}

export default Home;
