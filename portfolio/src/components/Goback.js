import { motion} from "framer-motion";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";



function Home() {

    const navigate=useNavigate()

    const Back=()=>{
        navigate('/home')
    }

    return (
        <div>           
            <motion.button initial={{x:100,opacity:0.5}} animate={{x:0,opacity:1}} transition={{duration:2,type:"spring",ease:"easeIn"}}  whileHover={{scale:1.2,color:"cyan"}}
            className="mb-4 back"
            onClick={Back}>
                <BackIcon/>
            </motion.button>
            <hr/>
            </div>

    );
}

export default Home;
