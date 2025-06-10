import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = `
    mr-3 font-semibold 
    ${active ? 'text-white border-b-2 border-purple-500' : 'text-[#ADB7BE]'}
    hover:text-white transition-colors duration-300
    px-4 py-2 rounded-lg
    hover:bg-[#3a3a3a] hover:scale-105 transition-all
  `;
  
  return (
    <button 
      onClick={selectTab}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default TabButton;