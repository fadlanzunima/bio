import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import work from "./assets/work.jpg";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <ul className="flex py-5 px-6 gap-6 justify-end font-medium w-full shadow-sm shadow-[#ECDFCC] overflow-hidden">
          <AnimatePresence>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, x: 500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{
                color: "#3C3D37",
              }}
            >
              Home
            </motion.li>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, y: -500 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              whileHover={{
                color: "#3C3D37",
              }}
            >
              About
            </motion.li>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 2 }}
              whileHover={{
                color: "#3C3D37",
              }}
            >
              Contact
            </motion.li>
          </AnimatePresence>
        </ul>
        <div>
          <img
            src={work}
            alt="work"
            className="w-full h-screen bg-cover bg-center object-cover saturate-100"
          />
        </div>
      </div>
    </>
  );
}

export default App;
