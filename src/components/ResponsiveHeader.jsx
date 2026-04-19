/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useBreakpoint } from "../hooks/useBreakpoints";
import NavbarComponent from "./layout/Navbar";
import SkewButton from "./ui/skew-button/SkewButton";
import { FaFire } from "react-icons/fa";
export default function ResponsiveHeader({ isOpen }) {
  const breakpoint = useBreakpoint();
  return (
    <AnimatePresence>
      {["sm", "md"].includes(breakpoint) && isOpen && (
        <motion.div
          initial={{ y: "-100%", rotate: 10 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: "-150%", rotate: -10 }}
          className="z-1 h-screen w-full fixed top-0 left-0 overflow-hidden"
        >
          <div className="absolute size-full top-0 left-0 p-2 bg-base-100 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.2px]">
            <div className="bg-secondary size-full rounded-2xl"></div>
          </div>
          <div className="relative z-2 flex justify-between items-center py-20 flex-col h-full">
            <div className="flex-1"></div>
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
              <NavbarComponent />
            </div>
            <div className="flex-1 flex items-end">
              <SkewButton
                title={"Get Results"}
                style={"primaryAlt"}
                icon={<FaFire />}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
