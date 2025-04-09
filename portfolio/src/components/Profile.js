import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../images/img1.jpeg";
import profileImage2 from "../images/img2.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import Certificate from '@mui/icons-material/VerifiedUser';
import SkillIcon from '@mui/icons-material/PrecisionManufacturing';
import "../css/Profile.css"
import { useNavigate } from "react-router-dom";

const images = [profileImage, profileImage2];

export default function Profile() {
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("home"); // Default active button

  const navi=useNavigate()

  const navigate = (button) => {
    setActiveButton(button);
    navi('/'+button,200)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <motion.div className="row" initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1, ease: "easeInOut", type:"spring" }}>
        <div className="d-flex justify-content-center">
          <div className="cir position-relative">
            <div className="rb shadow-lg overflow-hidden position-relative" style={{ width: "450px", height: "450px" }}>
              <motion.img
                key={index}
                src={images[index]}
                alt="Rotating"
                className=""
                style={{ width: "450px", height: "550px", objectFit: "cover" }}
                initial={{ y: "-100%"}}
                animate={{ y: "0%"}}
                transition={{ duration: 1,ease:"easeIn", type: "spring", stiffness: 100 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="row">
        <motion.div
          className="btn-container mt-4 d-flex gap-3 justify-content-center"
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <motion.button
            className={`button ${activeButton === "home" ? "active" : "inactive"}`} initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0, scale: [0, 1, 1] }}
            transition={{ duration: 0.5, ease: "easeIn" }} onClick={() => navigate("home")}><HomeIcon /></motion.button>
          <motion.button className={`button ${activeButton === "work" ? "active" : "inactive"}`} onClick={() => navigate("work")}><CodeIcon /></motion.button>
          <motion.button className={`button ${activeButton === "skill" ? "active" : "inactive"}`} initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0, scale: [0, 1, 1] }}
            transition={{ duration: 0.5, ease: "easeIn" }} onClick={() => navigate("skill")}><SkillIcon /></motion.button>
            <motion.button className={`button ${activeButton === "skill" ? "active" : "inactive"}`} initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0, scale: [0, 1, 1] }}
            transition={{ duration: 0.5, ease: "easeIn" }} onClick={() => navigate("skill")}><Certificate/></motion.button>
        </motion.div>
      </div>
    </div>
  );
}
