import React, { useState ,useEffect } from "react";
import { ReactDOM } from "react";
import "../style.css"
import img0 from "../images/img1.jpg"
import img2 from "../images/ss2.jpg"
import img3 from "../images/ss3.jpg"
import img4 from "../images/ss4.jpg"
import img5 from "../images/ss5.jpg"
import img6 from "../images/ss6.jpg"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import HomeContent from "./HomeContent";








function Body(){
    
    const [img,setImg] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const images = [img3,img3,img3,img3,img3]
    const color1 = ['black','white','black','white','white']
    const color2 = ['white','whitesmoke','white','#080eb2','whitesmoke']



    useEffect(() => {
        
        const interval = setInterval(() => {
         if(! isMouseOver){
          setImg((prevIndex) => (prevIndex + 1) % images.length);
     } }, 5000);
        return () => {
            clearInterval(interval);
          };
        }, [images.length,isMouseOver]);
    
        const handleMouseEnter = () => {
            setIsMouseOver(true);
          };
        
          const handleMouseLeave = () => {
            setIsMouseOver(false);
          };

        

    

    const imageStyle = {
        height: 'auto',
        maxWidth: '100%',
        backgroundImage:"url(" +img3+ ")",
        // backgroundImage: "url(" + images[img] + ")",
        // backgroundImage:`url(${images[img]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white", 
        transition: 'background-image 2s ease-in-out',
     };


    return (
    
    <div className="div1 .blur" style={imageStyle} >
    <div className="container wid" >
   
           <div className="row">
           <div className="col-lg-8" onMouseEnter={handleMouseEnter}
                                               onMouseLeave={handleMouseLeave}>
         <h1 className="stImp">ImPress Tool</h1>
         <h2 className="sthub">Smart Translation Hub</h2>
         <h3 style={{color:'whitesmoke',marginBottom:'8%'}}>Elevate your data-driven decision-making with ImPress, empowering you to seamlessly translate and execute complex impala queries into presto queries , maximizing productivity and ROI.</h3>

         <ul className="stlist" style={{color:'white'}}><li><AccessTimeFilledIcon/>Less Time : Significant reduction in development time that is required to translate the queries </li>
         <li><PaidIcon/>Low Cost : Elimination of manual labour of translating queries thus saving cost </li>
         <li><GppMaybeIcon/>Lower Risk: Reduced risk of data discrepancies and errors that can arise during manual query translation and migration </li></ul>

    </div>
   
    </div>
    </div>
   
    <div className="overlay">
    <div  className="wid">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">

                <h1></h1>
            </div>
        </div>
    </div>
    </div></div>
    </div>)
}

export default Body;