"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const FilteredProducts = ({ products }) => {
  //=================== States ====================//
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  //================== functions ==================//
  const filteredProducts = (event) => {
    console.log(event.target);
  };

  console.log("hiiiiii", selectedProduct, isOpen);

  useEffect(() => {}, [displayedProducts]);
  return (
    <>
      <div className="flex flex-col gap-6 mb-6 justify-center items-center lg:flex-row lg:justify-between">
        <h1 className="mr-1 text-2xl self-start font-bold xl:text-4xl">
          محبوبترین محصولات
        </h1>
        <ul className="w-full flex flex-row justify-evenly border rounded-4xl py-2 px-4 md:px-28 lg:w-[450px] lg:px-0 xl:w-[500px] xl:py-3">
          <li data-category="all" onClick={(event) => filteredProducts(event)}>
            همه
          </li>
          <li
            data-category="women"
            onClick={(event) => filteredProducts(event)}
          >
            زنانه
          </li>
          <li
            data-category="tshirt"
            onClick={(event) => filteredProducts(event)}
          >
            تیشرت
          </li>
          <li data-category="men" onClick={(event) => filteredProducts(event)}>
            مردانه
          </li>
          <li
            data-category="jacket"
            onClick={(event) => filteredProducts(event)}
          >
            ژاکت
          </li>
        </ul>
      </div>
      <div className="grid w-full gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
        {displayedProducts.length > 0 &&
          displayedProducts?.map((product) => (
            <ProductCard
              key={product._id}
              {...product}
              setSelectedProduct={setSelectedProduct}
              setIsOpen={setIsOpen}
            />
          ))}
      </div>
      {isOpen && <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} selectedProduct={selectedProduct} />}
    </>
  );
};

export default FilteredProducts;
