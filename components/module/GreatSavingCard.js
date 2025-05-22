import Image from "next/image";

const GreatSavingCard = ({ image }) => {
  return (
    <div className="relative w-[360px] h-[384px] rounded-3xl overflow-hidden">
      <Image
        alt="image"
        src={image}
        width={400}
        height={400}
        className="w-full h-full"
      />
      <div className="absolute rounded-2xl border border-black bg-white bottom-4 left-4 right-4 justify-between flex flex-row p-3">
        <div className="flex flex-col ">
          <span className="text-red-700">بیش از 79% تخفیف</span>
          <p className="font-semibold">ساق ورزشی مشبک ورزشی</p>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">$80</span>
          <span className="line-through text-gray-500">$95</span>
        </div>
      </div>
    </div>
  );
};
export default GreatSavingCard;
