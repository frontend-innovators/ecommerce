'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Hamburger from '../module/Hamburger'

import { IoIosSearch, IoIosHeartEmpty, IoIosArrowDown } from "react-icons/io";
import { IoCartOutline, IoExitOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

import { AnimatePresence, motion } from "framer-motion";
import Search from '../module/Search'
import { useUser } from '@/context/AuthContext'
import { digitsEnToFa } from '@persian-tools/persian-tools'

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Open and close the menu on mobile 
  const [showBottomNav, setShowBottomNav] = useState(true); // Show navigation menu when scroll down
  const [lastScrollY, setLastScrollY] = useState(0); // For scrolling up and down 
  const [showHeader, setShowHeader] = useState(true); // For scrolling up and down 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { user, loading, logout } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (currentScrollY === 0) {
        // At the top, ensure bottom nav is hidden
        setShowBottomNav(false);
      } else if (isAtBottom) {
        // At the bottom, keep the bottom nav hidden
        setShowBottomNav(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down → Show bottom nav
        setShowBottomNav(true);
      } else {
        // Scrolling Up → Hide bottom nav
        setShowBottomNav(false);
      }
      if (currentScrollY === 0) {
        // If at the top, always show the header
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down, hide the header
        setShowHeader(false);
      } else {
        // Scrolling Up, show the header
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handleScroll); // Attach event listener when component mounts
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup: Remove event listener when component unmounts
  }, [lastScrollY]); // Runs whenever lastScrollY changes

  // Open the menu and preventing scrolling
  const menuHandler = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  }

  // Close the menu
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -200 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="hidden lg:grid lg:grid-cols-[3fr_2fr] fixed top-0 right-0 p-4 shadow-md w-full bg-white z-50"
      >
        <div className='flex justify-right items-center'>
          <div>
            <Image
              className='w-28 h-auto ml-10'
              src="/images/logo.png" width={1900} height={1200} alt='logo' />
          </div>
          <div className='max-lg:hidden'>
            <ul className='flex justify-center items-center'>
              <li className='pr-10 text-lg'><Link href="/">خانه</Link></li>
              <li className='pr-10 text-lg'><Link href="/">فروشگاه</Link></li>
              <li className='pr-10 text-lg'><Link href="/">بلاگ</Link></li>
              <li className='pr-10 text-lg'><Link href="/">حساب کاربری</Link></li>
              <li className='pr-10 text-lg'><Link href="/">سوالات متداول</Link></li>
              {user?.role === "admin" ? <li className='pr-10 text-xl'><Link href="/nxt-admin">داشبورد</Link></li> : null}
            </ul>
          </div>
        </div>
        <div className='flex justify-end items-center px-10 max-lg:hidden'>
          <ul>
            {loading ? (
              <li className='pl-10 text-lg'><Link href="#">در حال بارگذاری...</Link></li>
            ) : user ? (
              <>
                <li className='pl-10 text-lg relative'><span>{digitsEnToFa(user.phoneNumber)}</span><IoIosArrowDown onClick={() => setMenuIsOpen(!menuIsOpen)} className='inline-block cursor-pointer' />
                  {menuIsOpen && (
                    <div
                      className="absolute top-[69px] w-44 text-lg z-10 before:content-[''] before:absolute before:top-[-34px] before:right-0 before:w-full before:h-8"
                      style={{ backgroundColor: "var(--background-color)", color: "var(--text-color)" }}>
                      <ul className='p-2'>
                        <li className='text-sm'><Link href="/profile"><RiAccountCircleLine className='inline-block' /> حساب کاربری</Link></li>
                        <li><button className='flex items-center mt-4 cursor-pointer text-sm' type='button' onClick={logout}><IoExitOutline className='ml-1' /> خروج از حساب کاربری</button></li>
                      </ul>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <li className='pl-10 text-lg'><Link href="/auth/login">ورود/ثبت نام</Link></li>
            )}
          </ul>
          <ul className='flex justify-center items-center ml-8'>
            <li className='text-xl ml-2 cursor-pointer' onClick={() => setIsSearchOpen(true)}><IoIosSearch /></li>
            <li className='text-xl ml-2'><IoIosHeartEmpty /></li>
            <li className='text-xl ml-8'><IoCartOutline /></li>
            <li>
              <div className="cursor-pointer group">
                <span className="h-[2px] w-[30px] block transition-all duration-300 bg-black"></span>
                <span className="h-[2px] w-[15px] block mt-2 transition-all duration-300 bg-black group-hover:w-[30px]"></span>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <div className='lg:hidden flex justify-between items-center px-2 shadow-md'>
        <div className='flex items-center'>
          <Hamburger menuHandler={menuHandler} />
        </div>
        <div>
          <Image src="/images/logo.png" width={1200} height={900} alt='logo' className='w-28 md:w-36 h-auto' />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-zinc-800/40 flex justify-center items-center z-50 cursor-[url('/images/cross.png'),crosshair]"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: isOpen ? "0%" : "100%" }} // Keeps animation alive
              exit={{ x: "100%" }} // Ensures closing animation runs
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 w-60 h-full z-50 bg-white"
            >
              <div className="lg:hidden flex items-center z-50 cursor-default">
                <div className="absolute top-0 right-0 w-60 h-full bg-white">
                  <Image
                    className="w-32 h-auto ml-10"
                    src="/images/logo.png"
                    width={1900}
                    height={1200}
                    alt="logo"
                  />
                  <ul className="p-8">
                    <li className="text-md mb-2"><Link href="/">خانه</Link></li>
                    <li className="text-md mb-2"><Link href="/shop">فروشگاه</Link></li>
                    <li className="text-md mb-2"><Link href="#">بلاگ</Link></li>
                    <li className="text-md mb-2"><Link href="#">حساب کاربری</Link></li>
                    <li className="text-md mb-2"><Link href="#">سوالات متداول</Link></li>
                    <li className="text-md mb-2"><Link href="/auth/login">ورود / ثبت نام</Link></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showBottomNav ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="lg:hidden fixed bottom-0 right-0 p-4 shadow-md w-full bg-white z-50"
      >
        <div className='flex justify-between items-center'>
          <Link className='ml-10 text-lg' href="/auth">ثبت نام / ورود</Link>
          <ul className='flex justify-center items-center ml-8'>
            <li className='text-xl ml-2 cursor-pointer' onClick={() => setIsSearchOpen(!isSearchOpen)}><IoIosSearch /></li>
            <li className='text-xl ml-2'><IoIosHeartEmpty /></li>
            <li className='text-xl ml-8'><IoCartOutline /></li>
            <li>
              <div className="cursor-pointer group">
                <span className="h-[2px] w-[30px] block transition-all duration-300 bg-black"></span>
                <span className="h-[2px] w-[15px] block mt-2 transition-all duration-300 bg-black group-hover:w-[30px]"></span>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Search Section */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ y: -600 }} // Start above the screen
            animate={{ y: 0 }}    // Animate to its position
            exit={{ y: -600 }}    // Exit back above the screen when closed
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 py-4  w-full bg-white z-50"
          >
            <Search setIsSearchOpen={setIsSearchOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header