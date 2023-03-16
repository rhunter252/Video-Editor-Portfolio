import { Outlet, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import headshot from "../assets/frances-headshot.jpeg";

const Profile = ({ setProfile }) => {
  return (
    <div className="container">
      <div className="close" onClick={() => setProfile(false)}>
        <FaTimes />
      </div>
      <div className="me">
        <div className="profile">
          <div className="imageContainer">
            <img src={headshot} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
