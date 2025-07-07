import { useRef } from "react";
import { BarChart3, SatelliteDish, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import VideoBack from "./VideoBack";
import Streamlit from "./Streamlit";
import { NavLink } from "react-router-dom";

function Home() {
  const heatmapRef = useRef(null); // 1. Create a ref

  const scrollToHeatmap = () => {
    heatmapRef.current?.scrollIntoView({ behavior: "smooth" }); // 2. Smooth scroll
  };

  const features = [
    {
      title: "Satellite Data Integration",
      description:
        "Utilize INSAT-3D/3DR/3DS satellites for real-time AOD measurements across the Indian subcontinent.",
      icon: (
        <SatelliteDish color="yellow" className="h-10 w-10 text-indigo-400" />
      ),
    },
    {
      title: "Machine Learning Models",
      description:
        "Random Forest algorithms trained on AOD and meteorological data for accurate PM predictions.",
      icon: <BarChart3 color="yellow" className="h-10 w-10 text-teal-400" />,
    },
    {
      title: "Ground Truth Validation",
      description:
        "CPCB ground station data for model validation and real-time comparison of predictions.",
      icon: (
        <ShieldCheck color="yellow" className="h-10 w-10 text-purple-400" />
      ),
    },
  ];
  const heroImage = "src/assets/image.png";

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <div className="space-y-0">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <VideoBack />
        </section>

        {/* Project Overview */}
        <section className="py-20 bg-black -mt-10 relative z-10 ">
          <div
            className="absolute top-0 left-0 w-full h-20 pointer-events-none"
            style={{
              boxShadow: "0 -40px 100px 100px rgba(0, 0, 0, 0.98)",
              zIndex: 30,
            }}
          />  
        </section>
        <section className="py-20 bg-black -mt-52 overflow-hidden relative z-40 ">
          <div className="container mx-auto px-6 relative z-20 mt-10 ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-500">
                Project Overview
              </h2>
              <p className="text-green-400 text-xl font-bold leading-relaxed">
                Estimating PM concentrations using INSAT AOD data and weather
                variables powered by machine learning.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.6 }}
                  className="bg-cyan-500 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-default hover:bg-cyan-300"
                >
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-indigo-900">
                    {feature.title}
                  </h3>
                  <p className="text-black text-md leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PM Concentration Heatmap */}
        {/* <section
          ref={heatmapRef} // 4. Reference target section
          className="border border-gray-200 rounded-lg p-4 mt-10"
        >
          <h2 className="text-xl font-bold mb-1">PM Concentration Heatmap</h2>
          <p className="text-gray-600 mb-4">
            Interactive map showing concentrations with CPCB station data
          </p>

          <div className="relative h-0 pb-[45%] rounded-xl border-2 border-dashed border-gray-400 bg-gradient-to-br from-blue-400/20 to-green-500/20 flex items-center justify-center overflow-hidden text-gray-700 font-semibold">
            <Streamlit />
          </div>
        </section> */}
      </div>
    </>
  );
}

export default Home;
