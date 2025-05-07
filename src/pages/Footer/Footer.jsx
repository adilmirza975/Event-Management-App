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
    <footer className="absolute w-full bg-gray-700 text-white h-[5.1vw] flex items-center justify-center bottom-0">

      <div className="flex justify-around items-center gap-4 w-full bottom-0">

        {footerData.map((item, index) => (

          <div key={index} className="footer-center flex justify-center gap-3 items-center">
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
