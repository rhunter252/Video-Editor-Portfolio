import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import video from "../assets/create_square.mp4";
import video2 from "../assets/pain is temporary.mp4";
import video3 from "../assets/Borderlands 3v1.mp4";
import headshot from "../assets/frances-headshot.jpeg";

const videoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const heightAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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

const Home = () => {
  return (
    <div className="overflow-hidden min-h-screen">
      <main className="main relative flex flex-col justify-center items-center h-full">
        {/* VIDEO */}
        <div className="outer h-screen flex flex-col justify-center items-center">
          <motion.div
            variants={videoAnim}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 mx-20 gap-12"
          >
            <video
              src={video2}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg h-[500px] w-[500px] object-cover sm: hidden md:block"
            />
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg h-[500px] w-[500px] object-cover sm:hidden md:block"
            />
            <video
              src={video3}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg h-[500px] w-[500px] object-cover sm: hidden md:hidden lg:block"
            />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="content absolute z-10 top-0 left-0 w-full h-full grid grid-cols-3 select-none">
          <div className="col flex justify-center items-center" />
          {/* CENTER COL */}
          <motion.div
            variant={heightAnim}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="col center relative justify-center"
          >
            <div className="line1 h-full w-1 bg-slate-100 absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2">
              <AnimatePresence>
                <Link
                  to="/showcase"
                  className="cursor-pointer text-slate-100 transition-all delay ease-in-out p-2 hover:text-slate-400 focus:text-slate-400"
                >
                  <motion.div variants={opacityAnim} className="link1">
                    <div
                      className="linkContainer absolute top-[10%] [writing-mode:vertical-lr] flex flex-col text-2xl gap-[0.2rem]"
                      onMouseEnter={() => {
                        setBackground(false);
                      }}
                      onMouseLeave={() => {
                        setBackground(true);
                      }}
                    >
                      <span className="small w-screen transition-none text-center hover:translate-y-6 focus:translate-y-6">
                        My Video Editing Portfolio
                      </span>
                      <span className="large w-screen transition-none text-center hover:text-slate-400 focus:text-slate-400">
                        Explore Now
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatePresence>
            </div>

            {/* LINE 2 */}
            {/* <div className="line2 h-full w-1 bg-slate-100">
              <AnimatePresence>
                <Link
                  to="/showcase"
                  className="cursor-pointer text-slate-100 transition-all delay ease-in-out p-2 hover:text-slate-400 focus:text-slate-400"
                >
                  <motion.div variants={opacityAnim} className="link2">
                    <div
                      className="linkContainer2 absolute top-[10%] [writing-mode:vertical-lr] flex flex-col text-2xl gap-[0.2rem]"
                      onMouseEnter={() => {
                        setBackground(false);
                      }}
                      onMouseLeave={() => {
                        setBackground(true);
                      }}
                    >
                      <span className="large w-screen transition-none text-center">How to find me</span>
                      <span className="small w-screen transition-none text-center">Contact Me</span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatePresence>
            </div> */}
          </motion.div>
          <div className="col flex justify-center items-center"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
