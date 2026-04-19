/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useBreakpoint } from "../hooks/useBreakpoints";
import NavbarComponent from "./layout/Navbar";
export default function ResponsiveHeader({ isOpen }) {
  const breakpoint = useBreakpoint();
  return (
    <AnimatePresence>
      {["sm", "md"].includes(breakpoint) && isOpen && (
        <motion.div
          initial={{ y: "-100%", rotate: 10 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: "-150%", rotate: -10 }}
          className="z-1 h-screen w-screen absolute p-2 top-0 left-0 overflow-hidden bg-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.8px] border border-white/30"
        >
          <div className="absolute bg-secondary size-[calc(100%-1rem)] top-2 left-2 rounded-2xl"></div>
          <div className="relative z-2 flex justify-between items-center py-20 flex-col h-full">
            <div className="flex-1"></div>
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
              <NavbarComponent />
            </div>
            <div className="flex-1 flex items-end">
              <button>asdfasfa</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
