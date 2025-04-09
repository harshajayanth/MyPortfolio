import { motion } from "framer-motion";
import React, { useState } from "react";
import "../App.css";
import "../css/work.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import GoBack from "./Goback";
import data from "../data.json"


function Work() {

    const[isactive,setIsactive]=useState(1);

    const setactive=(item)=>{
        setIsactive(item.id)
        console.log(item.id)
    }

    return (
        <div className="Cover">
            <motion.div className="container-fluid mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, type: "keyframes", stiffness: 100 }}>
                <div className="row">
                    <div className="col-md-6 scrollable-column">
                        <GoBack/>
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
                                    <Card item={item} isActive={isactive === item.id}/>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                    <div className="col-md-6">
                        {/* You can place other content here */}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Work;
