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
    <div>
      <div className="flex flex-col gap-6 mb-6 justify-center items-center">
        <h1 className="text-2xl self-start font-bold">محبوبترین محصولات</h1>
        <div className="flex flex-row justify-evenly border rounded-4xl w-[350px] py-2 px-6">
          <Link href="#">همه</Link>
          <Link href="#">زنانه</Link>
          <Link href="#">تیشرت</Link>
          <Link href="#">بیرونی</Link>
          <Link href="#">ژاکت</Link>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 justify-center">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default PopularProducts;
