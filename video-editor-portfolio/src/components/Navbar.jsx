import { Outlet, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaTimes, FaBars } from "react-icons/fa";
import useBackground from "../context/BackgroundContext";
import { useState, useRef } from "react";
import Profile from "./Profile";

const opacityAnim = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const NavbarAnim = {
  x: "100vw",
  transition: {
    duration: 0.3,
    ease: "easeInOut",
    staggerChildren: 0.1,
    when: "afterChildren",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const NavbarItemAnim = {
  hidden: {
    x: "10vw",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const NavbarBgAnim = {
  hidden: {
    width: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const { setBackground } = useBackground();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <motion.nav
        variants={opacityAnim}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed z-20 top-0 left-0 w-full flex justify-between items-center px-8 select-none"
      >
        <div className="logo">
          <Link to="/" className="text-4xl italic font-semibold text-slate-400">
            A
          </Link>
        </div>
        <ul
          className="flex items-center gap-12 py-12"
          onMouseEnter={() => setBackground(false)}
          onMouseLeave={() => setBackground(true)}
        >
          <li className="max-md:hidden">
            <Link
              to="/"
              className="text-xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
            >
              HOME
            </Link>
          </li>
          <li className="max-md:hidden">
            <Link
              to="/showcase"
              className="text-xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
            >
              SHOWCASE
            </Link>
          </li>
          <li className="max-md:hidden">
            <Link
              to="/clients"
              className="text-xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
            >
              CLIENTS
            </Link>
          </li>
          <li className="max-md:hidden">
            <Link
              to="/contact"
              className="text-xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
            >
              CONTACT
            </Link>
          </li>

          <button
            className="mobile hidden max-md:flex"
            onClick={() => setNavOpen(true)}
          >
            <FaBars className="text-slate-100 text-2xl transition-all ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400 max-md:text-slate-400  max-md:text-4xl" />
          </button>

          <button className="more flex justify-center self-center">
            <HiDotsHorizontal className="text-slate-500 text-2xl transition-all ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400 max-md:text-slate-400  max-md:text-4xl" />
          </button>
        </ul>
      </motion.nav>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {navOpen && (
          <>
            <motion.nav
              className="mobileNav flex fixed z-50 h-screen top-0 right-0 bg-black w-[300px] flex-col pt-4 pl-6 md:hidden"
              variants={NavbarAnim}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button
                className="close cursor-pointer flex justify-end text-[2.2rem] self-end mr-4 bg-transparent"
                onClick={() => setNavOpen(false)}
              >
                <FaTimes className="transition ease-in-out delay-200 text-slate-100 hover:text-slate-400 focus:text-slate-400" />
              </button>

              <div className="links flex h-screen flex-col justify-center md:hidden">
                <ul className="flex flex-col items-start">
                  <motion.li
                    className="text-slate-100"
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link
                      to="/"
                      className="text-2xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
                    >
                      HOME
                    </Link>
                  </motion.li>
                  <motion.li
                    className="text-slate-100"
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link
                      to="/showcase"
                      className="text-2xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
                    >
                      SHOWCASE
                    </Link>
                  </motion.li>
                  <motion.li
                    className="text-slate-100"
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link
                      to="/clients"
                      className="text-2xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
                    >
                      CLIENTS
                    </Link>
                  </motion.li>
                  <motion.li
                    className="text-slate-100"
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link
                      to="/contact"
                      className="text-2xl text-slate-500 font-semibold transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
                    >
                      CONTACT
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.nav>

            <motion.div
              className="mobileNavBg fixed top-0 left-0 w-full h-screen bg-black z-40 hidden max-md:block"
              variants={NavbarBgAnim}
              onClick={() => setNavOpen(false)}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
          </>
        )}
        <Profile />
      </AnimatePresence>
    </>
  );
};

export default Navbar;
