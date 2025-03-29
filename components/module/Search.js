import { IoMdClose, IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

function Search({ setIsSearchOpen }) {
    return (
        <div className='max-h-1/2 relative'>
            <IoMdClose
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-1 right-1 lg:top-2 lg:right-2 text-xl lg:text-3xl text-zinc-600 cursor-pointer" />
            <div className="py-8 lg:py-0 lg:p-10 shadow-md">
                <form>
                    <div className="grid grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_4fr_1fr] border-b-2 lg:p-4 mb-4">
                        <div className="ml-8 flex justify-center items-center">
                            <span>دسته بندی ها</span>
                            <MdKeyboardArrowDown />
                        </div>
                        <input
                            type="text"
                            placeholder="جستجوی محصول"
                            name="search"
                            className="w-full border-none outline-0"
                        />
                        <div>
                            <IoIosSearch className="mr-auto text-2xl cursor-pointer text-left" />
                        </div>
                    </div>
                    <div className="mb-12">
                        <span className="text-lg">جستجوی سریع: </span>
                        <span className="text-zinc-600">درحال حاضر دسته بندی وجود ندارد</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl mb-6">شاید بپسندید</h1>
                        <div>درحال حاضر محصولی وجود ندارد</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search