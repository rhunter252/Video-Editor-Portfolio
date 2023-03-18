import { Outlet, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import headshot from "../assets/frances-headshot.jpeg";

const Profile = ({ setProfile }) => {
  return (
    <div className="max-sm:w-full md:w-96 h-screen p-10 flex flex-col cursor-grab mx-4 bg-slate-800">
      <div
        className="close cursor-pointer text-slate-100 self-end py-2 pl-2 pr-0 bg-transparent text-3xl hover:text-slate-400 focus:text-slate-400"
        onClick={() => setProfile(false)}
      >
        <FaTimes />
      </div>
      <div className="me flex flex-col my-10 select-none">
        <div className="profile relative">
          <div className="imageContainer relative w-[150px] h-[150px] rounded-full overflow-hidden mb-10">
            <img
              src={headshot}
              alt="headshot"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="name absolute top-1/2 right-10 translate-x--1/2 flex flex-col text-end w-52">
            <span className="small uppercase text-white text-base font-semibold  tracking-widest">
              Video Editor
            </span>
            <span className="large uppercase text-white text-xl font-bold tracking-widest">
              Frances DiBiase
            </span>
          </div>
        </div>
        <p className="description text-white font-bold text-base leading-6 mb-10">
          Nice to meet you, friend! My name is Frances DiBiase. I am from
          Wyoming. Video Editing is my passion. Through the lens, the world
          looks different and I would like to show you this difference.
        </p>
        <Link
          to="/contact"
          className="text-white flex gap-[0.1rem] self-end items-center font-extrabold tracking-widest transition-all ease-in-out delay-100 hover:translate-x-1 hover:text-slate-400 focus:text-slate-400"
        >
          <span>CONTACT ME</span>
          <MdOutlineKeyboardArrowRight className="text-2xl text-white transition-all ease-in-out delay-150" />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
