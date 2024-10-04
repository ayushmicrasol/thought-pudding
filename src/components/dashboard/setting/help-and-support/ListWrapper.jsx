import React from "react";

const tableData = [
  { field: "Email Address", description: "Client’s email (check for typos)" },
  { field: "Name", description: "Client’s name." },
  { field: "Age", description: "Client’s age." },
  { field: "Gender", description: "Client’s gender." },
  {
    field: "Session Date",
    description: "Choose the session date from the calendar.",
  },
  {
    field: "Session Time",
    description: "Set the start and end time of the session.",
  },
  {
    field: "Time Zone",
    description: "Your time zone and the client’s (default: IST).",
  },
  {
    field: "Client Country",
    description: "The country where the client is located.",
  },
  {
    field: "Frequency",
    description: "Number of sessions per month.",
  },
  {
    field: "Session Amount",
    description: "The charge for each session.",
  },
  {
    field: "Description",
    description:
      "Nature of the session (e.g., Therapy Session: [Your Name] <> [Client Name]).",
  },
];

// Utility function to bold / strong specific text

const strongText = (text, boldText) => {
  if (!text) return text; // Return text as is if it's empty or undefined

  // Utility function to escape special regex characters in the boldText array
  const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters

  // Create a single regex pattern to match any of the bold phrases
  const regex = new RegExp(`(${boldText.map(escapeRegex).join("|")})`, "gi");

  // Split the text based on the regex
  const parts = text.split(regex);

  return parts.map((part, index) =>
    boldText.some((bold) => part.toLowerCase() === bold.toLowerCase()) ? (
      <span key={index} className="font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const ListWrapper = ({ title, subTitle, listData, table, pragraph }) => {
  const boldText = [
    "Settings-> Calendar Setting-> Sync Calendar",
    "[Your Name] <> [Client Name]",
  ];

  return (
    <div className="border border-green-600/30 rounded-base py-5 px-15px space-y-15px">
      <h2 className="text-base/6 text-primary font-semibold">{title}</h2>
      {subTitle && (
        <p className="text-sm/4 font-medium text-primary">{subTitle}</p>
      )}
      {/* Rendering the list */}
      {listData && (
        <ul className="text-sm/5 text-primary/70 list-disc pl-15px space-y-15px">
          {listData.map((item, index) => (
            <li key={index}>{strongText(item, boldText)}</li>
          ))}
        </ul>
      )}
      {/* Rendering the table */}
      {table && (
        <table className="w-full bg-white border border-yellow-600/20 divide-y divide-yellow-600/20">
          <thead className="text-left">
            <tr className="bg-yellow-100 divide-x divide-yellow-600/20">
              <th className="p-3 font-medium text-yellow-600 text-sm/5">
                Field
              </th>
              <th className="p-3 font-medium text-yellow-600 text-sm/5">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-600/20">
            {tableData.map((items, index) => (
              <tr key={index} className="divide-x divide-yellow-600/20">
                <td className="p-3 text-sm/5 font-medium text-primary">
                  {items.field}
                </td>
                <td className="p-3 text-sm/5 text-primary">
                  {strongText(items.description, boldText)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {pragraph && <p className="text-sm/5 text-primary/70">{pragraph}</p>}
    </div>
  );
};

export default ListWrapper;
