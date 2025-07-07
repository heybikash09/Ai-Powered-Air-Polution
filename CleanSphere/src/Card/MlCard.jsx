import React from 'react';

function MlCard() {
  return (
    <div className="max-w-xs bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg p-6 flex flex-col items-center space-y-6 text-white">
      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl">
        🤖
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">AI Insights</h3>
        <p className="text-indigo-200 mt-2">Unlock the power of machine learning.</p>
      </div>
      <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full hover:bg-indigo-50 transition">
        Explore
      </button>
    </div>
  );
}

export default MlCard;
