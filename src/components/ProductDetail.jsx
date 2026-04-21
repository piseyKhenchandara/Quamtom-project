'use client';

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const ProductDetail = ({ data, productType, onBuyClick }) => {
  const id = useParams()?.id;
  const product = Object.values(data).find((item) => item.id === id);
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [count, setCount] = useState(1); // Default quantity is 1

  if (!product) {
    return <div className="text-center text-2xl">Product not found</div>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (increment) => {
    setCount((prevCount) => {
      const newCount = prevCount + increment;
      return newCount > 0 ? newCount : 1; // Prevent negative quantities
    });
  };

  const handleAddToCart = () => {
    // Call the onBuyClick function passed from parent component
    onBuyClick(product, count);
    console.log(`Added ${count} ${product.name}(s) to cart`);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center p-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.img} // Dynamic image from props
            alt={product.name}
            className="w-[80%] md:w-[60%] transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-400">{product.description}</p>
          <p>
            <span className="font-semibold">Material:</span>{" "}
            {product.materials.join(", ")}
          </p>

          {/* Color Selection */}
          <div>
            <span className="font-semibold block mb-2">
              Color: {selectedColor}
            </span>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color ? "border-black" : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>
          </div>

          <p>
            <span className="font-semibold">Logo Placement:</span>{" "}
            {product.logoPlacement}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${product.price}
          </p>

          {/* Size Selection */}
          <div>
            <label
              htmlFor="size"
              className="font-semibold block mb-2"
            >
              Choose a size:
            </label>
            <select
              id="size"
              name="size"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="extra_large">XL</option>
              <option value="double_extra_large">XXL</option>
            </select>
          </div>

          {/* Quantity Selector */}
          <div>
            <span className="font-semibold block mb-2">Quantity:</span>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l"
              >
                -
              </button>
              <div className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                {count}
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r"
              >
                +
              </button>
            </div>
          </div>

          <p className="italic text-gray-300">{product.details}</p>

          <div className="flex space-x-4 mt-4">
            <button
              className="border-2 border-black text-black px-6 py-3 shadow-md hover:bg-black hover:text-white transition duration-300 cursor-pointer"
              onClick={handleAddToCart}
            >
              Buy
            </button>
            <button
              className="border-2 border-black px-6 py-3 shadow-md hover:bg-black hover:text-white transition duration-300"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
