import { getData } from "@/services/fetchData"
import Image from "next/image"

async function  UsersViewed() {
    const imgSection = "/images/banner-image.jpg"
    const products = await getData();
    console.log("inja inja",products);
    const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 3);
    console.log(randomProducts);
  return (
    <div className='text-4 bg-[#FFFAF3] flex flex-col'>
        <div>
            <Image className="rounded-t-[50%]" src={imgSection} width={1920} height={1080}></Image>
        </div>
        <div>
            <p className="w-[360px] h-[48px] text-[20px] leading-[24px] font-bold text-center mt-[30px] pb-[20px]">همچنین کاربران این محصولات را مشاهده کرده اند</p>
        </div>
        <div>
            <div>{randomProducts && randomProducts.map((products)=><div key={products._id}>{products.title}</div>)}
                <Image className="w-[250px]" src={products.image} width={1920} height={1080} alt={products.title}/>
            </div>
        </div>
    </div>
  )
}

export default UsersViewed