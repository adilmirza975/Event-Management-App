// // api import kro
// import footerContact from "../footerContactData";

// const Footer = () => {
//   return (
//     <footer className="footer-section h-[20vw]">

//       <div className="container grid grid-cols-3">

//         {footerContact.map((curData, index) => {
//           const { icon, title, details } = curData;

//           return (
//             <div key={index} className="footer-contact">

//               <div className="icon">{icon}</div>

//               <div className="footer-contact-text">
//                 <p>{title}</p>
//                 <p>{details}</p>
//               </div>

//             </div>

//           );
//         })}
//       </div>

//     </footer>
//   );
// };

// export default Footer;

// // api import kro
// import footerContact from "../footerContactData";

// const Footer = () => {
//   return (
//     <footer className="footer-section h-[20vw] bg-gray-900 text-white py-10">
//       <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
//         {footerContact.map((curData, index) => {
//           const { icon, title, details } = curData;

//           return (
//             <div key={index} className="footer-contact flex gap-4 items-start">
//               <div className="icon text-2xl">{icon}</div>

//               <div className="footer-contact-text">
//                 <p className="font-semibold">{title}</p>
//                 <p className="text-sm">{details}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import footerData from "../../api/footerApi.json";

import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

const iconMap = {
  MdPlace: <MdPlace />,
  IoCallSharp: <IoCallSharp />,
  TbMailPlus: <TbMailPlus />,
};

const Footer = () => {
  return (
    <footer className="footer-section bg-gray-900 text-white py-[4vw]">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {footerData.map((item, index) => (
          <div key={index} className="footer-contact  flex  justify-center gap-3 items-center">
            <div className="text-2xl">{iconMap[item.icon]}</div>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
