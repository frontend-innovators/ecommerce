import Image from "next/image"
import ExceptionalTitle from "./ExceptionalTitle"
import GreatSavingCard from "./GreatSavingCard"
import { digitsEnToFa } from "@persian-tools/persian-tools"


const Shortlist = ({productsData}) => {
  return (
    <div className=" px-4 md:px-12 flex flex-col gap-10 lg:flex-row-reverse lg:mb-20 lg:items-center lg:justify-between lg:pl-0 xl:pr-30 2xl:pr-52">
      <div className="relative w-full h-[336px] md:mb-8 md:w-full md:h-[644px] lg:w-[640px] lg:h-[606px] lg:translate-x-10 overflow-hidden xl:w-[778px] xl:h-[664px] xl:translate-x-0">
        <Image
          alt="girl"
          src="/images/pic2.jpg"
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
              بیش از {digitsEnToFa(60)}% تخفیف + بیش از {digitsEnToFa(107)}% بازگشت نقدی
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
      <div className="relative grid grid-cols-1 justify-items-center gap-y-6 md:grid-cols-2 md:gap-6 md:justify-items-center">
        {productsData.slice(0, 4).map((product) => (
          <GreatSavingCard key={product._id} image={product.thumbnail} />
        ))}
        <div className="w-[120px] h-[120px] absolute hidden sm:inline-block sm:-top-10 md:-right-8 lg:-right-16 2xl:-right-10">
          <div className="inline-block relative">
            <Image
              alt="start"
              width={1920}
              height={1080}
              src="/images/rotatingStar.png"
            className="animate-spinSlow"
            />
            <div className="absolute text-center font-medium inline-block w-[50px] top-8 right-8">
            {digitsEnToFa(50)}% تخفیف
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shortlist