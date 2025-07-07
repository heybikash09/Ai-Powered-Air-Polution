import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import vdosrc from '../assets/WhatsApp Video 2025-07-07 at 18.19.59_9b4f4809.mp4'
function VideoBack() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  return (
    <div className="relative -mt-60 h-screen w-full overflow-hidden shadow-2xl shadow-black">
      {/* Background Video */}
      <video
        className="absolute mt-20 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={vdosrc}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative mt-64 z-10 container mx-auto px-6 text-center max-w-4xl text-white">
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          AI-Powered Air Pollution Estimation
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-10 font-bold text-stone-950 drop-shadow"
        >
          Visualize PM2.5 & PM10 across India using INSAT AOD data and ML
          predictions.
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <NavLink
            to={"https://isro-hackthon-2025-vaayudrishti.streamlit.app/"}
            // onClick={scrollToHeatmap} // 3. Attach click handler
            className="border-2 border-white hover:bg-white hover:text-indigo-900 text-white py-3 px-8 rounded-xl text-lg font-semibold flex items-center gap-3 transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-300 bg-gradient-to-r from-teal-400 to-blue-500 cursor-pointer"
          >
            <BarChart3 className="h-6 w-6" /> Model Insights
          </NavLink>
        </motion.div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, black)",
          filter: "blur(40px)",
          opacity: 0.9,
          zIndex: 20,
        }}
      />
    </div>
  );
}

export default VideoBack;
