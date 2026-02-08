import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItems from "./ProductItems";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 12));
  }, [products]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <Title text1="LATEST" text2="COLLECTION" className="justify-center" />
        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
          Discover our latest collection, designed with modern trends and
          timeless style. Each piece is crafted to elevate your everyday look.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {latestProduct?.length
          ? latestProduct.map((item, index) => (
              <ProductItems key={item._id || index} items={item} />
            ))
          : (
            <div className="col-span-full text-center py-12 text-gray-500">
              Loading latest collection…
            </div>
          )}
      </div>
    </section>
  );
}

export default LatestCollection;
