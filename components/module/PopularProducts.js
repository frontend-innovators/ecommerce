import FilteredProducts from "./FilteredProducts";

const PopularProducts = async ({ productsData }) => {
  const popularProducts = productsData.slice(0,8);
  return (
    <div className="py-3 px-4 md:p-6 md:px-10 lg:mt-30 lg:px-12 xl:pl-30 2xl:pl-52">
      <FilteredProducts products={popularProducts} />
    </div>
  );
};

export default PopularProducts;
