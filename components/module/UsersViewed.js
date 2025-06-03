import Image from "next/image"

function UsersViewed() {
    const imgSection = "/images/banner-image.jpg"
  return (
    <div className='text-4 bg-[#FFFAF3] flex flex-col'>
        <div>
            <Image className="rounded-t-[50%]" src={imgSection} width={1920} height={1080}></Image>
        </div>
        <div>
            <p className="w-[360px] h-[48px] text-[20px] leading-[24px] font-bold text-center mt-[30px] pb-[20px]">همچنین کاربران این محصولات را مشاهده کرده اند</p>
        </div>
        <div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default UsersViewed