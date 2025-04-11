import { motion } from "framer-motion";
import "../App.css";
import "../css/card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fontsource/anton'; 

function Card({item,isActive}) {

    const imagesContext = require.context('../images', false, /\.(png|jpe?g|svg)$/);

        const imageMap = {};

        imagesContext.keys().forEach((key) => {
            const fileName = key.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
            imageMap[fileName] = imagesContext(key);
        });

    return (
        <motion.div
            className={`container noselect`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{rotateY:90,rotateX:90,scale:2,opacity:0}}
            transition={{ duration: 5, ease: "easeIn", type: "spring", stiffness: 100 }}
            exit={{opacity:0}}
            animate={{ rotateX:0,rotateY:0,scale:1,opacity:1}}
        >
            <div className={`canvas ${isActive ? "active-card" : ""}`}>
                {[...Array(9)].map((_, i) => (
                    <div key={i} className={`tracker tr-${i + 1}`}></div>
                ))}
                <div id="card">
                    <div className="card-content">
                        <motion.div className="project h2 text-center pt-3 mb-3" style={{fontFamily:'Anton'}} initial={{y:-100,opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1}} transition={{duration:2,delay:0.3,type:"spring"}}>{item.title}</motion.div>
                        <motion.div className="d-flex align-items-center justify-content-center mb-4" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1}}><img alt="" width={100} height={100} src={imageMap[item.image]}/></motion.div>
                        <motion.div className="description" initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:2,delay:1,type:"spring"}}>{item.description}</motion.div>
                        <div className="card-glare"></div>
                        <div className="cyber-lines">
                            {[...Array(4)].map((_, i) => (
                                <span key={i}></span>
                            ))}
                        </div>
                        <div className="glowing-elements">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className={`glow-${i + 1}`}></div>
                            ))}
                        </div>
                        <div className="card-particles">
                            {[...Array(6)].map((_, i) => (
                                <span key={i}></span>
                            ))}
                        </div>
                        <div className="corner-elements">
                            {[...Array(4)].map((_, i) => (
                                <span key={i}></span>
                            ))}
                        </div>
                        <div className="scan-line"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;
