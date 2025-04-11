import { motion } from "framer-motion";
import React, { useState } from "react";
import "../App.css";
import "../css/work.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import GoBack from "./Goback";
import data from "../data.json"
import '@fontsource/ubuntu'
import Livedemo from '@mui/icons-material/OpenInNew';
import GitHub from '@mui/icons-material/Code';
import * as Icons from './IconLibrary';



function Work() {


    const [isactive, setIsactive] = useState(1);

    const setactive = (item) => {
        setIsactive(item.id)
    }

    const activeItem = data.find(item => item.id === isactive);



    return (
        <div className="Cover">
            <motion.div className="container-fluid mt-5" style={{ height: "100vh" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                exit={{ opacity: 0 }}>
                <div className="row">
                    <div className="col-md-6 scrollable-column">
                        <GoBack />
                        <div className="row">
                            {data.map((item, index) => (
                                <motion.div
                                    className="col-6 mb-4"
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    onClick={() => setactive(item)}
                                >
                                    <Card item={item} isActive={isactive === item.id} />
                                </motion.div>
                            ))}
                        </div>
                    </div>


                    <motion.div className="col-md-6 mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, type: "spring", stiffness: 100 }}
                            className="container" style={{ width: "700px", height: "80vh" }}>
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, type: "spring", delay: 0.3, stiffness: 100 }}
                                className="text-center" style={{ fontFamily: 'Orbitron', color: 'white', textShadow: '0px 0px 30px white' }}>{activeItem.title}</motion.h1>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                className="mt-4" style={{ color: '#b5e7a0', fontFamily: 'ubuntu', fontSize: '1.3rem' }}>{activeItem.summary}</motion.div>

                            <div className="mt-4">
                                {activeItem?.livedemo ? (
                                    <a href={activeItem.livedemo ? activeItem.url : null} target="_blank"><motion.button
                                        initial={{ opacity: 0, x: -200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                        className="glassy m-2">
                                        <span className="p-2"><Livedemo /></span>
                                        LIVE DEMO
                                    </motion.button></a>
                                ) : null
                                }

                                <a href={activeItem.github} target="_blank">
                                    <motion.button
                                        initial={{ opacity: 0, x: -200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                        className="glassy"><span className="p-2"><GitHub /></span>GITHUB</motion.button></a>
                            </div>
                            <div className="text-white text-center mt-4">

                                <motion.h3
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, type: "keyframes", stiffness: 100 }} className="mb-4" style={{ fontFamily: "Orbitron", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "2px", color: 'aqua', textShadow: "0px 0px 20px cyan" }}>Technologies Used</motion.h3>

                                {activeItem.tech !== null ? (
                                    <div className="d-flex align-content-center justify-content-center gap-3">
                                        {activeItem.tech.map((tech, index) => {
                                            const TechIcon = Icons[tech];
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0, rotateY: 90 }}
                                                    animate={{ opacity: 1, rotateY: 0 }}
                                                    transition={{ duration: 0.2, stiffness: 100 }} key={index} className={TechIcon ? "Techicon" : null} title={tech}>
                                                    <span>{TechIcon ? <TechIcon /> : null}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                ) : null}

                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Work;
