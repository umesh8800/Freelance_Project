// import React, { useState } from "react";
// import "./styles.css";

// const MultipleOptionSelection = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleOptionChange = (optionValue) => {
//     // Check if the option is already selected
//     if (selectedOptions.includes(optionValue)) {
//       // Remove the option from the selectedOptions array
//       setSelectedOptions(
//         selectedOptions.filter((option) => option !== optionValue)
//       );
//     } else {
//       // Add the option to the selectedOptions array
//       setSelectedOptions([...selectedOptions, optionValue]);
//     }
//   };
//   const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

//   return (
//     <div style={{ display: "flex", gap: "2rem" }}>
//       {options.map((data) => (
//         <>
//           <div
//             className={`${
//               selectedOptions.includes(data) ? "selected" : "unSelected"
//             }`}
//             onClick={() => handleOptionChange(data)}
//           >
//             {data}
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default MultipleOptionSelection;