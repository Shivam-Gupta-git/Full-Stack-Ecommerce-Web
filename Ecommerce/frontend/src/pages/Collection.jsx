import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { FiFilter, FiSliders } from "react-icons/fi";

function Collection() {
  const { products, searchValue } = useContext(ShopContext);

  const [showFilterItems, setShowFilterItems] = useState(false);
  const [collectionItem, setCollectionItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [shortType, setShortType] = useState("relavent");

  const handelFilterItems = () => {
    setShowFilterItems((val) => !val);
  };

  useEffect(() => {
    setCollectionItem(products);
  }, [products]);

  const handelCategoryItem = (event) => {
    if (category.includes(event.target.value)) {
      setCategory((item) =>
        item.filter((items) => items !== event.target.value)
      );
    } else {
      setCategory((item) => [...item, event.target.value]);
    }
  };

  const handelSubCategoryItems = (event) => {
    if (subCategory.includes(event.target.value)) {
      setSubCategory((item) =>
        item.filter((items) => items !== event.target.value)
      );
    } else {
      setSubCategory((item) => [...item, event.target.value]);
    }
  };

  const applyFilterItems = () => {
    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter((items) =>
        category.includes(items.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((items) =>
        subCategory.includes(items.subCategory)
      );
    }

    if (searchValue) {
      productCopy = productCopy.filter((items) =>
        items.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setCollectionItem(productCopy);
  };

  useEffect(() => {
    applyFilterItems();
  }, [category, subCategory, searchValue, products]);

  const shortProduct = () => {
    let shortProductItems = collectionItem.slice();

    if (shortType === "high-low") {
      setCollectionItem(
        shortProductItems.sort((a, b) => b.price - a.price)
      );
    } else if (shortType === "low-high") {
      setCollectionItem(
        shortProductItems.sort((a, b) => a.price - b.price)
      );
    } else {
      applyFilterItems();
    }
  };

  useEffect(() => {
    shortProduct();
  }, [shortType]);

  const filterItems = (
    <div className="space-y-7">
      {/* Categories */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-500 to-violet-500" />
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-900">
            Categories
          </h3>
        </div>

        <div className="space-y-3">
          {["Men", "Women", "Kids"].map((item, index) => (
            <label
              key={index}
              className="group flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={item}
                  onChange={handelCategoryItem}
                  className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                />
                <span className="text-sm font-medium text-gray-700 transition group-hover:text-gray-900">
                  {item}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-violet-500 to-pink-500" />
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-900">
            Type
          </h3>
        </div>

        <div className="space-y-3">
          {["Topwear", "Bottomwear", "Winterwear"].map((item, index) => (
            <label
              key={index}
              className="group flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 transition-all duration-300 hover:border-violet-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={item}
                  onChange={handelSubCategoryItems}
                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />
                <span className="text-sm font-medium text-gray-700 transition group-hover:text-gray-900">
                  {item}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-[#faf8f6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-6 lg:gap-8">
        {/* Sidebar */}
        <aside className="hidden w-[280px] shrink-0 lg:block">
          <div className="sticky top-24 overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg">
                <FiFilter className="text-lg" />
              </div>

              <div>
                <h2 className="text-lg font-black tracking-tight text-gray-900">
                  Filters
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Refine Collection
                </p>
              </div>
            </div>

            {filterItems}
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        <div
          className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
            showFilterItems
              ? "visible opacity-100"
              : "invisible opacity-0"
          }`}
          onClick={handelFilterItems}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute left-0 top-0 h-full w-[85%] max-w-[320px] overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-500 ${
              showFilterItems ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white">
                  <FiFilter />
                </div>

                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              </div>

              <button
                onClick={handelFilterItems}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-600"
              >
                <IoIosArrowDropleft />
              </button>
            </div>

            {filterItems}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_15px_40px_rgba(15,23,42,0.05)] sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={handelFilterItems}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-600 lg:hidden"
                >
                  {showFilterItems ? (
                    <IoIosArrowDropleft className="text-xl" />
                  ) : (
                    <FiFilter className="text-lg" />
                  )}
                </button>

                <Title text1={"ALL"} text2={"COLLECTION"} />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="rounded-2xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
                  {collectionItem.length} Products Found
                </div>

                <div className="relative min-w-[220px]">
                  <FiSliders className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <select
                    onChange={(event) => setShortType(event.target.value)}
                    className="h-12 w-full appearance-none rounded-2xl border border-gray-200 bg-white pl-12 pr-10 text-sm font-medium text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  >
                    <option value="relavent">Sort by: Relevant</option>
                    <option value="high-low">Sort by: Price High to Low</option>
                    <option value="low-high">Sort by: Price Low to High</option>
                  </select>

                  <IoIosArrowDropright className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-lg text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {collectionItem.map((items, index) => (
              <div
                key={index}
                className="animate-[fadeUp_0.6s_ease] transition-transform duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProductItems items={items} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {collectionItem.length === 0 && (
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
                🛍️
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                No Products Found
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-7 text-gray-500">
                Try changing your filters or search keyword to discover more
                products.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Collection;