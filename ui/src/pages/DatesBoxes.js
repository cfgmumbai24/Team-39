import React from 'react';

const DatesBoxes = ({month="January",days=31}) => {

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{month} Days</h1>
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: days }, (_, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center bg-blue-500 text-white font-semibold rounded-lg shadow-md"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatesBoxes;
