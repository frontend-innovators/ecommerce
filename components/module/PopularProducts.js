import FilteredProducts from "./FilteredProducts";

const PopularProducts = async ({ productsData }) => {
  return (
    <div className="py-3 px-4 md:p-6 md:px-10 lg:mt-30 lg:px-12 2xl:px-36">
      <FilteredProducts products={productsData} />
    </div>
  );
};

export default PopularProducts;
