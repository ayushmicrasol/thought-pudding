import React from "react";

const THeade = ({ data }) => {
  return (
    <thead className="text-left">
      <tr className="bg-[#F9F9F9] uppercase shadow-[0px_2px_8px_0px_#2A5F611F]">
        {data?.map((item, index) => (
          <th
            key={index}
            className="px-15px py-5 font-medium text-primary/70 text-sm/5"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default THeade;
