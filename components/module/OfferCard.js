"use client";
import Link from "next/link";
import Image from "next/image";

function OfferCard({ slide }) {

    return(
        <div className="flex flex-col w-[480px] h-[400px] rounded-3xl" style={{ backgroundColor: slide.bgColor }}>
            <div className="flex flex-col">
                <h4>{slide.title}</h4>
                <div>
                    <h2>{slide.subTitle}</h2>
                    <h1>{slide.secondTitle}</h1>
                </div>
                <Link href="/">خرید</Link>
            </div>
            <Image className="absolute" src={slide.imgSrc} width={200} height={250} alt="sliderImg"/>
        </div>
    )
}

export default OfferCard