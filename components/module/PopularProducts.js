import FilteredProducts from "./FilteredProducts";

export const revalidate = false;
const PopularProducts = async () => {
  let products = [];
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/products`,
      { cache: "no-store" }
    );
    if (!result.ok) throw new Error("faild to fetch");
    products = await result.json();
    console.log("products from server", products);
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="py-3 px-4 md:p-6 md:px-10 lg:mt-30 lg:px-12 2xl:px-36">
        <FilteredProducts products={products} />
    </div>
  );
};

export default PopularProducts;
