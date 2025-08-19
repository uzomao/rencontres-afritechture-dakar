import React from "react";

const Grid = ({ items }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-4 bg-white shadow hover:shadow-md transition-shadow cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mb-3 border border-gray-200"
            />
            <h6 className="text-base font-semibold text-gray-900 uppercase">
              {item.name}
            </h6>
            <p className="text-body-text-small text-gray-600 mt-3">{item.title}</p>
            {item.org && (
              <p className="text-xs text-gray-500 mt-3">{item.org}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;