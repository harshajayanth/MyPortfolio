import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "react-bootstrap"; // Bootstrap Card component
import "../App.css";
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../images/img1.jpeg"; // Import image correctly

function Home() {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText((prev) => !prev);
        }, 2000); // Toggle every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div>
            <div className="Cover container-fluid d-flex justify-content-center text-center">
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <AnimatePresence>
                            (
                                <motion.h1
                                    key="text"
                                    className="name"
                                
                                    initial={{ opacity: 0, y: -200,backgroundImage:
                                        "linear-gradient(90deg,rgb(204, 190, 187),rgb(84, 79, 76))" }}
                                    animate={{ opacity: 1, y: 0 ,backgroundImage:
                                        "linear-gradient(180deg,rgb(204, 190, 187),rgb(8, 8, 8))"}}
                                    transition={{ duration: 1 }}
                                >
                                    Harsha Jayanth
                                </motion.h1>
                            )
                        </AnimatePresence>
                    </div>
                    <div className="col-6">
                    <motion.div
                                    key="image"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Card className="shadow-lg border-0">
                                        <Card.Body>
                                        <Card.Img
                                            variant="top"
                                            src={profileImage}
                                            className="image"
                                        />
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
