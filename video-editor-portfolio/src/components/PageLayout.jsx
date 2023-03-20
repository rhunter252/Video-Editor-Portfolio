import { motion, AnimatePresence } from "framer-motion";
import { MdHeight } from "react-icons/md";

const heightAnim = {
  hidden: {
    height: "0",
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
  visible: {
    height: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const opacityAnim = {
  hidden: {
    opacity: 0,
    ease: "easeInOut",
    when: "afterChildren",
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const PageLayout = ({ children, largeTitle, smallTitle }) => {
  return (
    <div className="container grid grid-cols-[120px 1fr 120px] relative z-2 min-h-screen max-md:flex max-md:flex-col max-lg:grid-cols-[80px 1fr 80px]">
      <div className="center flex justify-between">
        {/* LINE 1 */}
        <motion.div
          className="line1 relative h-full w-[1px] bg-slate-800 ml-32 max-md:bottom-80 max-md:absolute max-md:h-96 max-md:rotate-90"
          initial="hidden"
          animate="visible"
          variants={heightAnim}
        >
          <AnimatePresence>
            <motion.div
              className="text sticky top-1/2 left-24 rotate-[270deg] translate-x-28px translate-y-1/3 flex flex-col justify-center items-center gap-1 select-none max-md:absolute max-md:rotate-[-90deg] max-md:right-24 max-md:top-80"
              variants={opacityAnim}
            >
              <div className="textInner flex flex-col justify-center items-center">
                <span className="small text-xl font-bold">{smallTitle}</span>
                <span className="large block text-3xl whitespace-nowrap mt-4 max-md:mt-0 max-md:text-4xl max-md:text-center">
                  {largeTitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* CONTENT */}
        <div className="content w-full py-0 px-8">
          <div className="inner">{children}</div>
        </div>
        {/* LINE-2 */}
        <motion.div
          className="line2 relative h-full w-[1px] bg-slate-600 mr-32 max-md:hidden"
          initial="hidden"
          animate="visible"
          variants={heightAnim}
        />
      </div>
      {/* RIGHT COL */}
    </div>
  );
};

export default PageLayout;
