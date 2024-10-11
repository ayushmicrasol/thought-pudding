import React from "react";

const THeader: React.FC<{ data: Array<unknown> }> = ({ data }) => {
  return (
    <thead className="text-left">
      <tr className="bg-green-600/5 uppercase shadow-[0px_2px_8px_0px_#2A5F611F]">
        {data?.map((item, index) => (
          <th
            key={index}
            className="px-15px py-5 font-semibold text-primary/70 text-sm/5"
          >
            {item as React.ReactNode}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default THeader;
