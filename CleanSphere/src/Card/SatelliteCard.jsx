import React from "react";

function SatelliteCard() {
  const sections = [
    {
      title: "🛰 Satellite & Atmospheric Data Sources",
      items: [
        {
          name:
            "NASA MERRA-2 (Modern-Era Retrospective analysis for Research and Applications, Version 2)",
          link: "https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2",
        },
        {
          name: "ECMWF ERA5 Reanalysis (via Copernicus Climate Data Store)",
          link: "https://cds.climate.copernicus.eu",
        },
        {
          name: "INSAT-3D Satellite Data (IMD Satellite Portal)",
          link: "https://www.imd.gov.in/pages/satellite.php",
        },
        {
          name: "MODIS Terra & Aqua AOD Data (NASA Earthdata)",
          link: "https://earthdata.nasa.gov",
        },
      ],
    },
    {
      title: "🌦 Weather & Meteorological Data Sources",
      items: [
        {
          name: "India Meteorological Department (IMD)",
          link: "https://mausam.imd.gov.in",
        },
        {
          name: "NOAA Global Forecast System (GFS)",
          link:
            "https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs",
        },
      ],
    },
    {
      title: "🧪 Air Quality & Ground Truth Data",
      items: [
        {
          name: "Central Pollution Control Board (CPCB), India",
          link: "https://cpcb.nic.in",
        },
        {
          name: "OpenAQ Platform",
          link: "https://openaq.org",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-xl shadow-lg space-y-8 w-full mx-auto">
      {sections.map((section, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            {section.title}
          </h3>
          <ul className="space-y-3 pl-4">
            {section.items.map((item, j) => (
              <li key={j}>
                <p className="text-white">{item.name}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline break-all"
                >
                  🔗 {item.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SatelliteCard;
