import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Greet.css";
import "../App.css"
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Greet() {

    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowFirst(false), 1000);
    }, []);

    const navigate = useNavigate();

    const handleNavigate = () => {
        setTimeout(() => navigate("/home"), 200);
    };



    return (
        <div className="Cover" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="container-fluid">
        <div className="row">
            
            <div className="col-6">
            <AnimatePresence>
                {showFirst ? (
                    <motion.div
                        key="hello"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: -50 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        style={{
                            color: "white",
                            borderRadius: "10px",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "90px",
                        }}
                    >
                        Hello There!
                    </motion.div>
                ) : (
                    <motion.div
                        key="welcomePortfolio"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
                        style={{
                            color: "white",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            fontSize: "70px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <motion.button
                            className="animated-button"
                            onClick={handleNavigate}
                        >
                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                            <span className="text">PORTFOLIO</span>
                            <span className="circle"></span>
                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Greet;
