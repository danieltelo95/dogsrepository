// import React from "react";

// const Pagination = ({ dogsPerPage, totalDogs, currentPage, onPageChange }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((pageNumber) => (
//           <li key={pageNumber} className="page-item">
//             <a
//               href="#!"
//               className={`page-link ${
//                 pageNumber === currentPage ? "active" : ""
//               }`}
//               onClick={() => onPageChange(pageNumber)}
//             >
//               {pageNumber}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
