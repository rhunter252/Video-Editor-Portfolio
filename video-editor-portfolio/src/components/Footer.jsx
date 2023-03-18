import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsInstagram, BsTiktok, BsFacebook, BsYoutube } from "react-icons/bs";

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

const Footer = () => {
  return (
    <motion.footer
      className="fixed z-10 bottom-0 left-0 w-full py-12 px-8 flex justify-between border-t-2 max-md:py-6 max-md:px-8"
      variants={opacityAnim}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <ul className="text-xl text-slate-100 flex gap-3">
        <li>
          <Link
            to="/"
            className="transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
          >
            <BsTiktok />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
          >
            <BsInstagram />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
          >
            <BsFacebook />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="transition ease-in-out delay-200 hover:text-slate-400 focus:text-slate-400"
          >
            <BsYoutube />
          </Link>
        </li>
      </ul>
      <div className="copyright text-slate-100 select-none tracking-wide">
        <span>COPYRIGHT @{new Date().getFullYear()}</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
