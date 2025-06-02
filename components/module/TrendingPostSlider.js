'use client' // Enables client-side rendering for this component in Next.js

// Import Swiper components for building a slider
import { Swiper, SwiperSlide } from "swiper/react";

// Import the Autoplay module to enable automatic slide transition
import { Autoplay } from "swiper/modules";

// Import base Swiper styles
import "swiper/css";

// Import Next.js Image component for optimized image rendering
import Image from "next/image";

// Import an arrow icon from react-icons
import { GoArrowUpLeft } from "react-icons/go";

// Import social media icons from react-icons
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";

// Import motion from Framer Motion for animations
import { motion } from "framer-motion";

// Import useRef and useState hooks from React
import { useRef, useState } from "react";

// Import Link component for client-side navigation
import Link from "next/link";

// Main functional component accepting `blogs` as a prop
function TrendingPostSlider({ blogs }) {

    // State to track which blog card is being hovered over for social icons
    const [isHovered, setIsHovered] = useState(null);

    // Ref to store Swiper instance for manual control (start/stop autoplay)
    const swiperRef = useRef(null);

    // Helper function that returns the appropriate icon based on the social media platform
    const getIcon = (platform) => {
        const icons = {
            facebook: <TiSocialFacebook size={25} />,
            instagram: <TiSocialInstagram size={25} />,
            twitter: <TiSocialTwitter size={25} />,
            linkedin: <TiSocialLinkedin size={25} />,
        };
        return icons[platform];
    };

    return (
        <div>
            <Swiper
                modules={[Autoplay]} // Include Autoplay functionality
                autoplay={{ delay: 4000 }} // Set autoplay delay to 4 seconds
                loop // Enables infinite loop sliding
                spaceBetween={10} // Default spacing between slides
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in ref
                breakpoints={{ // Responsive settings for various screen widths
                    320: { slidesPerView: 1, spaceBetween: 8 },
                    390: { slidesPerView: 1.2, spaceBetween: 8 },
                    640: { slidesPerView: 2.2, spaceBetween: 16 },
                    1024: { slidesPerView: 3.5, spaceBetween: 20 },
                    1280: { slidesPerView: 3, spaceBetween: 20 },
                    1537: { slidesPerView: 4.5, spaceBetween: 20 },
                    1921: { slidesPerView: 5.5, spaceBetween: 20 }
                }}
                className="w-full mt-8" // Add spacing and full width
            >

                {blogs.map((blog, index) => { // Loop over each blog item
                    return (
                        <SwiperSlide key={blog._id}> {/* Unique key for each slide */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }} // Animation start
                                whileInView={{ opacity: 1, y: 0 }} // Animate into view
                                viewport={{ once: false }} // Trigger animation on every entry
                                transition={{ duration: 0.4, delay: index * 0.2 }} // Add stagger effect
                            >
                                <Link href={blog.slug}> {/* Link to blog detail page */}
                                    <div
                                        className="w-full lg:w-[450px] p-2 md:p-4 relative group overflow-hidden"
                                        onMouseEnter={() => swiperRef.current?.autoplay?.stop()} // Pause autoplay on hover
                                        onMouseLeave={() => swiperRef.current?.autoplay?.start()} // Resume autoplay on mouse leave
                                    >
                                        {/* Decorative glowing swipe animation on hover */}
                                        <span
                                            className="absolute w-[600px] h-[50px] rounded-full bg-white/30 blur-md rotate-45 top-20 left-[100%] z-10 pointer-events-none opacity-0 transition-transform duration-1000 ease-in-out group-hover:opacity-100 group-hover:translate-x-[-250%] group-hover:translate-y-[800%] shadow-white shadow-2xl"
                                        />
                                        {/* Blog image */}
                                        <Image
                                            src={blog.image}
                                            width={1920}
                                            height={1080}
                                            className='w-full h-[350px] lg:h-[450px] lg:object-cover rounded-lg'
                                            alt={blog.title}
                                            quality={95}
                                        />

                                        {/* Bottom right: title and action button */}
                                        <div className="flex justify-between items-center absolute bottom-10 right-10">
                                            <h1 className="w-56 md:w-64 lg:w-80 text-white text-lg lg:text-2xl">
                                                {blog.title}
                                            </h1>

                                            {/* Hover-triggered button with social icons */}
                                            <div
                                                className="relative"
                                                onMouseEnter={() => setIsHovered(blog._id)} // Show social icons
                                                onMouseLeave={() => setIsHovered(null)} // Hide social icons
                                            >
                                                {/* Main button with arrow icon */}
                                                <button
                                                    className="bg-white p-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-400 cursor-pointer"
                                                >
                                                    <GoArrowUpLeft size={25} />
                                                </button>

                                                {/* Social media links appear above the button */}
                                                <div className="absolute bottom-12 left-0 flex flex-col gap-2 z-10">
                                                    {Object.entries(blog.socialMedia).map(([platform, url], idx) => {
                                                        if (!url || url === "undefined") return null; // Skip invalid links

                                                        return (
                                                            <motion.a
                                                                key={platform}
                                                                href={url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{
                                                                    opacity: isHovered === blog._id ? 1 : 0,
                                                                    y: isHovered === blog._id ? 0 : 10,
                                                                }}
                                                                transition={{
                                                                    delay: isHovered === blog._id ? idx * 0.1 : 0,
                                                                    duration: 0.3,
                                                                }}
                                                                className="p-2 bg-white text-black rounded-full"
                                                            >
                                                                {getIcon(platform)} {/* Render appropriate icon */}
                                                            </motion.a>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Top right: date badge */}
                                        <div className="absolute top-10 right-10 bg-white w-28 text-center rounded-md">
                                            {new Date(blog.createdAt).toLocaleDateString("fa-IR")} {/* Persian date */}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

// Export the component to be used in other parts of the app
export default TrendingPostSlider
