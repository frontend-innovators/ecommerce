import ExceptionalTitle from "./ExceptionalTitle";
import GreatSavingCard from "./GreatSavingCard";
import Image from "next/image";

const GreatSaving = ({ productsData }) => {
  return (
    <div className=" px-4 md:px-12 flex flex-col gap-8 lg:flex lg:flex-row-reverse lg:mb-20 lg:items-center lg:justify-between lg:pr-0 xl:pl-30 2xl:pl-52">
      <div className="grid grid-cols-1 justify-items-center gap-y-6 md:grid-cols-2 md:gap-6 md:justify-items-center">
        {productsData.slice(0, 4).map((product) => (
          <GreatSavingCard key={product._id} image={product.thumbnail} />
        ))}
      </div>
      <div className="relative w-full h-[336px] md:w-full md:h-[644px] lg:w-[640px] lg:h-[606px] lg:translate-x-10 overflow-hidden xl:w-[778px] xl:h-[726px] xl:translate-x-0">
        <Image
          alt="girl"
          src="/images/pic.jpg"
          width={1920}
          height={1080}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 px-10 lg:items-end lg:pl-24 xl:px-0 xl:items-center">
          <div className="lg:w-[400px] text-center">
             <h1 className="text-2xl text-center font-black text-white md:text-4xl lg:mb-6">
            تخفیف استثنایی در لوازم ضروری روزمره
          </h1>
          <p className=" text-center text-xl text-white md:text-2xl lg:text-xl">
            بیش از 60% تخفیف + بیش از 107% بازگشت نقدی
          </p>
          <button className="bg-white text-black w-fit rounded-lg mt-2 font-bold mx-auto px-7 py-2 md:px-10 md:py-3 md:text-xl md:mt-10">
            دیدن همه
          </button>
          </div>
          
          <div className="absolute bottom-4 hidden md:block">
            <ExceptionalTitle />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GreatSaving;
