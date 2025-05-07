import Link from "next/link";
import ProductCard from "./ProductCard";

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
    <div className="py-3 px-4 md:p-6 md:px-10 lg:mt-30 lg:px-12">
      <div className="flex flex-col gap-6 mb-6 justify-center items-center lg:flex-row lg:justify-between">
        <h1 className="mr-1 text-2xl self-start font-bold xl:text-4xl">
          محبوبترین محصولات
        </h1>
        <div className="w-full flex flex-row justify-evenly border rounded-4xl py-2 px-4 md:px-28 lg:w-[450px] lg:px-0 xl:w-[500px] xl:py-3">
          <Link href="#">همه</Link>
          <Link href="#">زنانه</Link>
          <Link href="#">تیشرت</Link>
          <Link href="#">بیرونی</Link>
          <Link href="#">ژاکت</Link>
        </div>
      </div>
      <div className="grid w-full gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default PopularProducts;
