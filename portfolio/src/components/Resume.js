import { motion } from "framer-motion";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GoBack from './Goback';
import Resume from '../images/Resume.png';
import file from '../images/Resume.pdf';
import '@fontsource/orbitron';

function resume() {
    const download = () => {
        const link = document.createElement('a');
        link.href = file;
        link.download = 'Harsha_Jayanth_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        {
            name: "Github",
            href: "https://github.com/HARSHAJAYANTH",
            y: 100
        },
        {
            name: "Gmail",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=harshajayanth437@gmail.com",
            y: 50
        },
        {
            name: "Facebook",
            href: "https://facebook.com",
            y: 0
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/@jayanthmelodies9920",
            y: -50
        },
        {
            name: "Instagram",
            href: "https://instagram.com/yourprofile", // Replace with your actual profile
            y: -100
        }
    ];

    return (
        <div className="Cover container-fluid">
            <div className="row row-full">
                <div><GoBack /></div>

                <div className="col-6">
                    <motion.div
                        initial={{ rotateY: 300, opacity: 0 }}
                        animate={{ rotateY: 360, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.2, type: "spring" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <img
                            src={Resume}
                            width="450px"
                            height="600px"
                            className="rounded resume"
                            onClick={download}
                            alt="Resume"
                        />
                    </motion.div>
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center" style={{marginBottom:"250px"}}>
                    <div className="col-8">
                        <div className="container">
                            <div className="row">
                                <motion.h1
                                    style={{
                                        fontFamily: "Orbitron",
                                        color: "aqua",
                                        textShadow: "0px 0px 40px cyan",
                                        marginBottom: "25px",
                                        textAlign: "center"
                                    }}
                                    initial={{ opacity: 0, scale: 0.5, rotateX: 90, letterSpacing: "3px" }}
                                    animate={{ opacity: 1, scale: 1, rotateX: 0, letterSpacing: "5px", fontWeight: "bold" }}
                                    transition={{ duration: 2, delay: 0.5, type: "spring" }}
                                >
                                    CONTACT
                                </motion.h1>
                            </div>

                            <div className="row d-flex flex-column align-items-center gap-3">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none", width: "100%" }}
                                    >
                                        <motion.button
                                            className="row-full media w-100"
                                            initial={{ opacity: 0, y: link.y }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, ease: "easeOut" }}
                                        >
                                            <span>{link.name}</span>
                                        </motion.button>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default resume;
