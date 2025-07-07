import React from "react";
import { Database, Globe } from "lucide-react";

function GroundTruthCard() {
  const sources = [
    {
      title: "Central Pollution Control Board (CPCB)",
      subtitle: "India's National Pollution Monitoring Authority",
      icon: <Database className="text-purple-500 w-6 h-6" />,
    },
    {
      title: "OpenAQ Platform",
      subtitle: "Open-source Air Quality Aggregator",
      icon: <Globe className="text-purple-500 w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-purple-700">
        🧪 Air Quality & Ground Truth Sources
      </h2>

      <div className="grid gap-4">
        {sources.map((source, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl shadow-md flex items-start space-x-4 transition-transform hover:scale-[1.02]"
          >
            <div className="flex-shrink-0">{source.icon}</div>
            <div>
              <h3 className="text-md font-semibold text-gray-800">
                {source.title}
              </h3>
              <p className="text-sm text-gray-600">{source.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroundTruthCard;
