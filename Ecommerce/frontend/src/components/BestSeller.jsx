import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const best = (products || []).filter((item) => item.bestseller);
    setBestSeller(best.slice(0, 8));
  }, [products]);

  return (
    <section className="w-full bg-[#ebe5df]/50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <Title text1="BEST" text2="SELLER" className="justify-center" />
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Shop our best sellers — the most popular picks of the season. Tried,
            tested, and loved by everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSeller?.length ? (
            bestSeller.map((item, index) => (
              <ProductItems key={item._id || index} items={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No best sellers to show yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
