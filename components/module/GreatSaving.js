import GreatSavingCard from "./GreatSavingCard";
import Image from "next/image";
export const revalidate = false;

const GreatSaving = async () => {
  let products = [];
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/products`,
      { cache: "no-store" }
    );
    if (!result.ok) throw new Error("faild to fetch data");
    products = await result.json();
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="flex flex-col gap-8 items-center px-[15px]">
      {products.slice(0, 4).map((product) => (
        <GreatSavingCard key={product._id} image={product.thumbnail} />
      ))}
      <div className="relative w-full h-[336px]">
        <Image
          alt="girl"
          src="/images/wardrobe-1.png"
          width={400}
          height={400}
          className="w-full h-full "
        />
        <div className=" flex flex-col gap-3 left-10 right-10 absolute top-15">
          <h1 className="text-2xl text-center font-bold text-white">
            صرفه جویی عالی در لوازم ضروری روزمره
          </h1>
          <p className=" text-center text-xl text-white">بیش از 60% تخفیف + بیش از 107% بازگشت نقدی</p>
          <button className="bg-white text-black w-fit rounded-lg mt-2 font-bold mx-auto px-7 py-2">
            دیدن همه
          </button>
        </div>
      </div>
    </div>
  );
};
export default GreatSaving;
