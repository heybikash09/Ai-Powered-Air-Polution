import { useRef, useState } from "react";
import { BarChart3, SatelliteDish, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import VideoBack from "./VideoBack";
import Streamlit from "./Streamlit";
import SatelliteCard from "../Card/SatelliteCard";
import GroundTruthCard from "../Card/GroundTruthCard";
import MlCard from "../Card/MlCard";
const ourTeam = [
  {
    name: "Prakash Sahoo",
    linkedin:"https://www.linkedin.com/in/prakash-sahoo-ai/"
  },
  {
    name: "Susmita Das",
    linkedin:"https://www.linkedin.com/in/susmita-das-2b61a6312"
  },
  {
    name: "Manohar Kumar Sah",
    linkedin:"https://www.linkedin.com/in/manoharkumarsah/"
  },
  {
    name: "Bikash Ranjan Ghadai",
    linkedin:"www.linkedin.com/in/bikash-ranjan-ghadai-a23710299"
  },
];
function Home() {
  // const heatmapRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const scrollToHeatmap = () => {
  //   heatmapRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const features = [
    {
      title: "Satellite Data Integration",
      description:
        "Utilize INSAT-3D/3DR/3DS satellites for real-time AOD measurements across the Indian subcontinent.",
      icon: <SatelliteDish className="h-10 w-10 text-indigo-400" />,
      content: <SatelliteCard />,
    },
    {
      title: "Machine Learning Models",
      description:
        "Random Forest algorithms trained on AOD and meteorological data for accurate PM predictions.",
      icon: <BarChart3 className="h-10 w-10 text-teal-400" />,
      content: <MlCard />,
    },
    {
      title: "Ground Truth Validation",
      description:
        "CPCB ground station data for model validation and real-time comparison of predictions.",
      icon: <ShieldCheck className="h-10 w-10 text-purple-400" />,
      content: <GroundTruthCard />,
    },
  ];

  return (
    <div className="w-full" onClick={() => setHoveredIndex(null)}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <VideoBack />
      </section>

      {/* ================= BLACK SPACER ================= */}
      <section className="bg-black relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-20 pointer-events-none"
          style={{
            boxShadow: "0 -40px 100px 100px rgba(0, 0, 0, 0.98)",
            zIndex: 30,
          }}
        />
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section
        onClick={() => setHoveredIndex(null)}
        className="w-full py-16 sm:py-20 bg-black relative z-40 -mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-yellow-500">
              Project Overview
            </h2>
            <p className="text-green-400 text-lg sm:text-xl font-semibold leading-relaxed">
              Estimating PM concentrations using INSAT AOD data and weather
              variables powered by machine learning.
            </p>
          </motion.div>
          <div className=" flex justify-center text-amber-400 font-bold p-3">Click on cards to View</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredIndex(i);
                }}
                // onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className="bg-cyan-500 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow  hover:bg-cyan-300 cursor-pointer"
              >
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-900">
                  {feature.title}
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {hoveredIndex !== null && (
          <>
            {/* Blur background overlay */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setHoveredIndex(null)}
            />

            {/* Modal itself */}
            <motion.div
              key={hoveredIndex}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-6 rounded-2xl shadow-2xl w-[65%] md:w-[50%] h-[60%] text-center overflow-scroll"
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-2">
                {features[hoveredIndex].title}
              </h3>
              <p className="text-gray-700 text-sm w-full">
                {features[hoveredIndex].content}
              </p>
            </motion.div>
          </>
        )}
      </section>

      {/* ================= OUR TEAM SECTION ================= */}
      <section className="w-full py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            Our Team
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-12">
            Meet the researchers and engineers behind this project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourTeam.map((member, i) => (
                <a key={i} className="relative group bg-gray-800 text-white rounded-2xl p-6 shadow-lg transition-all duration-500 hover:bg-indigo-900 min-h-[80px] overflow-hidden cursor-pointer" href={member.linkedin}>
                  <h3 className="text-xl font-semibold mb-1 text-yellow-400">
                    {member.name}
                  </h3>
                </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
