import { motion } from "framer-motion";
import video from "../assets/create_square.mp4";
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
          >
            <video src={video} autoPlay loop muted playsInline />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="content absolute z-10 top-0 left-0 w-full h-full grid grid-cols-3 select-none">
          <div className="col flex justify-center items-center">
            {/* CENTER COL */}
            <div className="col center relative justify-center"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
