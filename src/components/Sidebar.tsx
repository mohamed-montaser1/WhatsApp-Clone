import { BsChatText } from "react-icons/bs";
import { IoMdCall, IoMdSettings } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
import profilePicture from "/myImage.jpg";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="navigation">
        <li>
          <BsChatText />
        </li>
        <li>
          <IoMdCall />
        </li>
        <li>
          <HiOutlineStatusOnline />
        </li>
      </ul>
      <ul className="controll">
        <li>
          <IoMdSettings />
        </li>
        <li className="image">
          <img src={profilePicture} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
