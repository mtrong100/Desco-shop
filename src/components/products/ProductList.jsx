import React, { useEffect, useState } from "react";
import { BsFillBoxFill } from "react-icons/bs";
import ProductItem from "./ProductItem";
import { useShop } from "../../context/shop-context";
import { option } from "../../data";

const ProductList = () => {
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [filterProducts, setFilterProducts] = useState([]);
  const { products } = useShop();

  useEffect(() => {
    filterItems();
  }, [category, priceRange, products]);

  const filterItems = () => {
    let tempProducts = [...products];

    // Filter theo category
    if (category !== "All") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
      console.log(tempProducts);
    }

    // Filter theo giá
    if (priceRange === "Low") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    } else if (priceRange === "High") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(tempProducts);
  };

  const handleFilterCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleFilterPrice = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <section className="py-5 md:my-20">
      <div className="page-container">
        <div className="flex items-center gap-3">
          <BsFillBoxFill size={50} className="text-blue-500"></BsFillBoxFill>
          <h1 className="text-2xl font-bold text-blue-500 uppercase border-b-2 border-blue-500 border-solid md:text-4xl w-fit">
            Our products
          </h1>
        </div>

        {/* filter section*/}
        <section className="flex flex-col gap-3 mt-5 md:flex-row">
          {/* filter products */}
          <div>
            <label className="mr-3 text-lg font-medium text-blue-500 ">
              Filter Products:
            </label>
            <select
              onChange={handleFilterCategory}
              className="w-[120px] border-2 border-blue-500 border-solid rounded-sm"
            >
              {option.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* filter price */}
          <div className="border-blue-600 border-solid md:pl-2 md:border-l-2">
            <label className="mr-3 text-lg font-medium text-blue-500 ">
              Filter Price:
            </label>
            <select
              onChange={handleFilterPrice}
              className="w-[150px] border-2 border-blue-500 border-solid rounded-sm"
            >
              <option value="All">All</option>
              <option value="Low">Low to High</option>
              <option value="High">High to Low</option>
            </select>
          </div>
        </section>

        {/* products */}
        <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-4">
          {filterProducts &&
            filterProducts.map((item) => (
              <ProductItem key={item.id} item={item}></ProductItem>
            ))}
        </div>
      </div>
    </section>
  );
};
export default ProductList;
