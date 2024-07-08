
// const AddResume = () => {
//     return (
//         <a
//           href="/resume.pdf"
//           className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700  no-underline"
//           download
//         >
//           Download My Resume
//         </a>
//       );
    
// }

// export default AddResume;



// const AddResume = () => {
 

//   return (
//     <div className="p-4">
//       <a
//         href="/resume.pdf"
//         className="inline-block px-6 py-2 text-white rounded hover:bg-blue-700  "
//         style={{ textDecoration: 'none' }}
//         download
//         // onClick={handleClick}
//       >
//         Download My Resume
//       </a>
       
//     </div>
//   );
// };

// export default AddResume;



const AddResume = () => {

  return (
    <div className="p-4">
      <a
        href="https://github.com/Umesh7Dixit/UmeshDixit_Portfolio.git/resume.pdf"
        className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        style={{ textDecoration: 'none' }}
        // onClick={handleDownload}
      >
        My Resume
      </a>
    </div>
  );
};

export default AddResume;