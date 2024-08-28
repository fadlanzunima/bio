import "./App.css";
import { motion } from "framer-motion";
import work from "./assets/work.jpg";

function App() {
  return (
    <>
      <div className="overflow-hidden shadow-sm shadow-[#ECDFCC]">
        <div className="flex py-5 px-6 justify-between font-medium w-full overflow-hidden">
          <ul className="flex gap-6">
            <ul className="flex gap-1">
              <motion.li
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }} // Gerakan memantul
                transition={{
                  duration: 0.5, // Durasi satu siklus animasi
                  ease: "easeInOut", // Tipe easing
                }}
                className="font-RobotoSlab font-bold"
              >
                fadlan
              </motion.li>
              <motion.li
                className="font-RobotoSlab font-bold"
                initial={{ y: 0 }}
                animate={{ y: [0, 30, 0] }} // Gerakan memantul
                transition={{
                  duration: 1, // Durasi satu siklus animasi
                  ease: "easeInOut", // Tipe easing
                }}
              >
                zunima
              </motion.li>
            </ul>
            <motion.li
              className="font-sans"
              initial={{ opacity: 0, scale: 0.5, y: -500 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              frontend developer
            </motion.li>
          </ul>
          <ul className="flex gap-6">
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, x: 500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{
                textDecoration: "line-through",
              }}
            >
              home
            </motion.li>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, y: -500 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              whileHover={{
                textDecoration: "line-through",
              }}
            >
              about
            </motion.li>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 2 }}
              whileHover={{
                textDecoration: "line-through",
              }}
            >
              contact
            </motion.li>
          </ul>
        </div>
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
