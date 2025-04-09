import { motion} from "framer-motion";
import "../App.css";
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import Content from "./Content"



function Home() {


    return (
        <motion.div>
            <div className="Cover container-fluid">
                <div className="row">
                    <div className="col-6">
 
                        <Content/>
                    </div>
                    <div className="col-6">
                        <Profile/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
