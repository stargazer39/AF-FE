// import React from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";
// // import styled from 'styled-components'

// // const Wrapper = styled.div`
// //   .icon-style {
// //     color: gold;
// //   }
// // `

// const Star = ({ stars }) => {
//   const ratingStar = Array.from({ length: 5 }, (elem, index) => {
//     let number = index + 0.5;
//     return (
//       <span key={index}>
//         {stars >= index + 1 ? (
//           <FaStar className="icon" />
//         ) : stars >= number ? (
//           <FaStarHalfAlt className="icon" />
//         ) : (
//           <AiOutlineStar className="icon" />
//         )}
//       </span>
//     );
//   });
//   return <div className="icon-style">{ratingStar}</div>;
//   //   return <Wrapper>{ratingStar}</Wrapper>
//   // return (
//   //   <Wrapper>
//   //     <div className="icon-style">{ratingStar}</div>
//   //   </Wrapper>
//   // )
// };

// export default Star;

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index} className="inline-block">
        {stars >= index + 1 ? (
          <FaStar className="icon text-yellow-500" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon text-yellow-500" />
        ) : (
          <AiOutlineStar className="icon text-yellow-500" />
        )}
      </span>
    );
  });
  return <div className="flex space-x-1">{ratingStar}</div>;
};

export default Star;
