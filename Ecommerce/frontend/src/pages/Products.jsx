import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar, FaStarHalf } from "react-icons/fa";
import RelatedProduct from "../components/RelatedProduct";

function Products() {
  const { ProductId } = useParams();
  const { products, currency, handelCartItems, addToWishlist } =
    useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const product = products.find((item) => item._id === ProductId);
    if (!product) return;

    setProductData(product);
    setImage(product.image[0]);
  }, [ProductId, products]);

  if (!productData) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading product details...
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f5ebe0] py-10 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src={image}
                alt={productData.name}
                className="w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 flex gap-2 bg-white/80 px-2 py-1 rounded-lg">
                {productData.image.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setImage(img)}
                    className={`w-14 h-14 object-cover rounded cursor-pointer border-2 transition
                      ${
                        img === image
                          ? "border-[#7f5539]"
                          : "border-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 bg-[#f1d9bf]  rounded-xl p-6 space-y-5 shadow-sm">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">
                {productData.name}
              </h1>
              <p className="text-sm text-gray-500">
                Category: {productData.category}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span className="text-gray-400 text-sm ml-1">(123)</span>
            </div>

            {/* Price */}
            <div>
              <span className="text-2xl font-bold text-green-600">
                {currency}
                {productData.price}
              </span>
            </div>

            {/* Description */}
            <div className="border-t pt-3">
              <p
                className={`text-sm text-gray-500 ${
                  showDesc ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {productData.description}
              </p>

              {productData.description.length > 120 && (
                <button
                  onClick={() => setShowDesc(!showDesc)}
                  className="text-sm text-blue-600 mt-1 hover:underline"
                >
                  {showDesc ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {/* Sizes */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`px-4 py-1 rounded-md border transition
                      ${
                        size === item
                          ? "bg-gray-800 text-white border-gray-800"
                          : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handelCartItems(productData._id, size)}
                className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-950 text-white rounded-lg transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToWishlist(productData._id)}
                className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                Wishlist
              </button>
            </div>

            {/* Info */}
            <hr />
            <div className="text-gray-400 text-sm space-y-1">
              <p>✔ 100% Original Product</p>
              <p>✔ Cash on delivery available</p>
              <p>✔ Easy return & exchange within 7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </>
  );
}

export default Products;