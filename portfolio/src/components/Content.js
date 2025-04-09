import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const Skillset = ['Musician', 'Pianist', 'Software Developer', 'Speaker', 'Content Creator'];

  const showResume = () => {
    navigate('/resume')
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % Skillset.length);
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
  
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ paddingLeft: "200px" }}
          >
            <motion.h1 className="mb-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "anticipate", type: "spring", duration: 1, delay: 0.3 }}
                style={{ fontWeight: "bold", color: "aqua" }}
              >
                Hello, I'm
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -200 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ ease: "easeIn", type: "spring", duration: 1, delay: 0.4 }}
                style={{ fontWeight: "bold", color: "lightgreen" }}
              >
                Harsha Jayanth
              </motion.div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeIn", type: "spring", delay: 0.5 }}
              style={{
                marginTop: '4px',
                fontWeight: 'bold',
                color: 'white',
                fontSize: '2rem',
                textShadow: "0px 0px 40px white"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={Skillset[currentIndex]}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 5, type: 'spring', stiffness: 100 }}
                  style={{ display: 'inline-block', color: "white" }}
                >
                  {Skillset[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ color: "wheat", marginTop: "50px" }}
            >
              A passionate artist, composer, and pianist. I love blending creativity with technology by programming music and exploring new ways to push artistic boundaries. <br />
              I'm also a dedicated software developer, constantly driven by curiosity and innovation.
              <br /><br />
              My current focus lies in building impactful AI projects that merge logic with creativity.
              I aim to create experiences that inspire, connect, and make a difference.
            </motion.p>

            <motion.button
              className="mt-4 btn btn-sm"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ opacity: 0 }}
              style={{
                background: 'linear-gradient(135deg, violet, #8e2de2, #4a00e0)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                fontSize: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 0 10px #8e2de2, 0 0 20px #8e2de2',
                textShadow: '0 0 5px #fff',
                perspective: '1000px'
              }}
              onClick={showResume}
            >
              EXPLORE
            </motion.button>
          </motion.div>
    </div>
  );
}
