"use client"
import { getData } from "@/services/fetchData"
import Image from "next/image"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RotateTextUsersViewed from "./RotateTextUsersViewed";

 function  UsersViewed() {
    const imgSection = "/images/banner-image.jpg"
    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const all = await getData();
      const random = all.sort(() => Math.random() - 0.5).slice(0, 3);
      setProducts(random);
    }
    fetchData();
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1, 
  });
  return (
    <div className='text-4 bg-[#FFFAF3] flex flex-col lg:flex-row-reverse'>
        {/* big image of section */}
        <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-10 p-4 rounded-lg"
    >
        {/* <div> */}
            <Image className="w-[95vw] m-auto rounded-t-[50%] sm:w-[90vw] md-[85vw] lg:w-[40vw]" src={imgSection} width={1920} height={1080}></Image>
        {/* </div> */}
        </motion.div>
        {/* main text and products */}
        <motion.div
            ref={ref}
            initial={{ opacity: 1, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" p-4 rounded-lg">   
        {/* main text */}
        <div className="flex flex-row items-center justify-between w-full">
            <p className="w-[90vw] text-[20px] leading-[24px] mb-[20px] font-bold pr-[4vw] sm:w-[450px] sm:text-right
            sm:text-[28px] sm:leading-[36px] ">همچنین کاربران این محصولات را مشاهده کرده اند</p>
            <RotateTextUsersViewed/>
        </div>
        {/* product's image */}
        <div className="md:w-[95vw] md:pt-[80px] lg:w-[60vw]">
            <div className="grid grid-cols-1 m-auto gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {products && products.map((product)=><div key={product._id}>
                    <div className="overflow-hidden rounded-2xl">
                <Image className="w-[95vw] rounded-2xl m-auto md:w-[30vw] object-cover transition-transform duration-300 hover:scale-110" 
                src={product.image} alt={product.image} width={1920} height={1080}/></div>
                <div className="flex justify-between px-4 py-[15px]">
                    <div>
                        <h4 className="text-gray-900 font-bold text-[22px] md:text-[14px]">{product.price}</h4>
                        <h4 className="text-gray-900 font-thin text-[22px] line-through md:text-[14px]">{product.price}</h4>
                    </div>
                    <div>
                        <h4 className="text-red-700 font-bold text-[22px] text-left md:text-[14px]">تا ۷۹٪ تخفیف</h4>
                        <h4 className="text-gray-900 font-bold text-[24px] md:text-[14px] whitespace-nowrap">{product.title}</h4>
                    </div>
                </div></div>)}
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default UsersViewed