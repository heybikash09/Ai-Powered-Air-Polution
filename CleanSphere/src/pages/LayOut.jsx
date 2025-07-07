import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import earthImg from "../assets/v176ox7k.png";

function LayOut() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const isActive = (path) => location.pathname === path;
  //     bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100
  return (
    <div
      className="min-h-screen w-[100vw] bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 
bg-red-700
    transition-colors duration-300 flex flex-col"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-400 to-green-400 shadow-md"
              src={earthImg}
              alt="logo"
            />
            <span className="text-2xl font-bold tracking-wide">
              VaayuDrishti
            </span>
          </NavLink>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t"
          >
            <div className="flex flex-col space-y-1 px-4 py-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full px-4 py-2 rounded-md text-left transition ${
                    isActive(item.href)
                      ? "bg-blue-500 text-white shadow"
                      : "hover:bg-blue-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 container  w-full"
      >
        <Outlet />
      </motion.main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-100 py-12 mt-16 border-t border-gray-700 shadow-inner">
        <div className="container mx-auto px-6 md:px-12 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              AirWatch India
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              AI-powered air pollution monitoring leveraging satellite imagery
              and real-time machine learning forecasts to promote environmental
              awareness and research.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-300">
              Data Sources
            </h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-white transition">
                INSAT-3D/3DR/3DS Satellites
              </li>
              <li className="hover:text-white transition">
                CPCB Ground Stations
              </li>
              <li className="hover:text-white transition">
                MERRA-2 Reanalysis Data
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-300">
              Technology
            </h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-white transition">
                Random Forest ML Model
              </li>
              <li className="hover:text-white transition">
                AOD + Meteorological Data
              </li>
              <li className="hover:text-white transition">
                Real-time Predictions
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
          &copy; 2024 AirWatch India. Crafted for environmental intelligence and
          scientific impact.
        </div>
      </footer>
    </div>
  );
}

export default LayOut;
