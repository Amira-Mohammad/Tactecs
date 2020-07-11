import React from 'react';
import logo from '../../images/logo.png';
import './Home.css'
import { motion } from "framer-motion";


// const variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   }

function Home(props) {
    return (
        <div className="text-center h-100 pt-5" >
            
            <motion.img src={logo} width="200" height="200"
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }} />
            <div className="HomeText">
            Technical Assistant consultants
            </div>
            <div>
            TACTECS is a new consultant firm aiming at providing consultancy services though technical, institutional, and administrative assistance. 
            </div>
        </div>
    );
}

export default Home;