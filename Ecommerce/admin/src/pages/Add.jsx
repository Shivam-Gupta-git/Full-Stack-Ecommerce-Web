import axios from "axios";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { backentUrl } from "../App";
import { toast } from "react-toastify";

function Add({ token }) {
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Topwear");
    const [price, setPrice] = useState("");
    const [sizes, setSizes] = useState([]);
    const [bestseller, setBestseller] = useState(false);

    const handelFormData = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();

            image1 && formData.append("image1", image1);
            image2 && formData.append("image2", image2);
            image3 && formData.append("image3", image3);
            image4 && formData.append("image4", image4);

            formData.append("name", name);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("price", price);
            formData.append("subCategory", subCategory);
            formData.append("sizes", JSON.stringify(sizes));
            formData.append("bestseller", bestseller);

            console.log("Token being sent:", token);
            console.log("Backend URL:", backentUrl);

            const response = await axios.post(
                backentUrl + "/api/product/add",
                formData,
                { headers: { token } }
            );

           if(response.data.success){
            toast.success(response.data.message)
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
            setName('')
            setDescription('')
            setPrice('')
           }else{
            toast.error(response.data.message)
           }
        } catch (error) {
            console.log("data can not be uploaded", error);
        }
    };

    return (
        <form onSubmit={handelFormData}>
        <div className="w-full flex justify-center md:px-4 md:py-6">
          <div className="w-full bg-white p-5 rounded-md shadow-md shadow-gray-300 flex flex-col gap-6">
            
            {/* Image Upload */}
            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">Upload Images</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[image1, image2, image3, image4].map((img, idx) => (
                  <label key={idx} htmlFor={`image${idx + 1}`} className="cursor-pointer">
                    {!img ? (
                      <IoCloudUploadOutline className="text-6xl p-3 bg-gray-100 rounded shadow hover:scale-105 duration-300" />
                    ) : (
                      <img
                        src={URL.createObjectURL(img)}
                        className="h-24 w-24 object-cover rounded shadow hover:scale-105 duration-300"
                        alt={`preview-${idx + 1}`}
                      />
                    )}
                    <input
                      onChange={(e) =>
                        [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])
                      }
                      type="file"
                      id={`image${idx + 1}`}
                      hidden
                    />
                  </label>
                ))}
              </div>
            </div>
      
            {/* Product Name */}
            <div>
              <label className="text-lg text-gray-700">Product Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter product name"
                className="w-full mt-2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
      
            {/* Product Description */}
            <div>
              <label className="text-lg text-gray-700">Product Description</label>
              <textarea
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description"
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>
      
            {/* Category & Sub-category */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="text-lg text-gray-700">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
      
              <div className="flex-1">
                <label className="text-lg text-gray-700">Sub-Category</label>
                <select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>
            </div>
      
            {/* Price Input */}
            <div>
              <p className="text-lg text-gray-700">Product Price</p>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                className="w-1/2 sm:w-1/3 mt-2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
      
            {/* Product Sizes */}
            <div>
              <p className="text-lg text-gray-700 mb-2">Product Sizes</p>
              <div className="flex flex-wrap gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    onClick={() =>
                      setSizes((prev) =>
                        prev.includes(size)
                          ? prev.filter((s) => s !== size)
                          : [...prev, size]
                      )
                    }
                    className={`w-12 text-center py-1 rounded cursor-pointer shadow-sm ${
                      sizes.includes(size)
                        ? "bg-gray-800 text-white"
                        : "bg-gray-300 text-gray-700"
                    } hover:scale-110 duration-300`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
      
            {/* Bestseller Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="bestseller"
                checked={bestseller}
                onChange={() => setBestseller(!bestseller)}
                className="h-4 w-4"
              />
              <label htmlFor="bestseller" className="text-gray-700">
                Add to Bestseller
              </label>
            </div>
      
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded shadow-md hover:scale-105 transition-transform"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    );
}

export default Add;
