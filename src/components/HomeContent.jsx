import React, { useState ,useEffect } from "react";
import { ReactDOM } from "react";
import "../style.css"
import logo2 from "../images/impala.png"
import logo3 from "../images/presto.png"
import Quote from './Quote'
import CodeEditor from "./CodeEditor";
import axios from 'axios';
import img0 from "../images/img1.jpg"
import img2 from "../images/ss2.jpg"
import img3 from "../images/ss3.jpg"
import img4 from "../images/ss4.jpg"
import img5 from "../images/ss5.jpg"
import img6 from "../images/ss6.jpg"



function HomeContent(){

    const [img,setImg] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const images = [img2,img3,img2,img5,img6]
    const color1 = ['black','white','black','white','white']
    const color2 = ['yellow','yellow','black','yellow','yellow']



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
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const[value1,setValue1] = useState('grey')
    
  
    const handleCodeChange = (e) => {
      setCode(e.target.value);
    };
  
    const sendDataToPython = async () => {
      try {
        const response = await axios.post('http://localhost:5000/process', { data: code });
        // console.log("The data is ",response.data.result[1])
        setResult(response.data.result);
        response.data.result[1]?setValue1('red'):setValue1('black')
      } catch (error) {
        console.error(error);
      }
    };

    const imageStyle = {
        height: 'auto',
        maxWidth: '100%',
        backgroundImage: "url(" + images[img] + ")",
        // backgroundImage:`url(${images[img]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white", 
        transition: 'background-image 2s ease-in-out',
     };


     return <div className="div1 .blur" style={imageStyle} >
     <div className="container wid">
          
    <div className="row">
    <div className="col-lg-7">
    <h1 style={{fontSize:'70px',fontWeight:'700'}}>ImPress Tool</h1>        
     <h3>Make your life Simple</h3>
    </div>
    <div className="col-lg-5"><Quote style={{position:'block'}}/></div>

    <div className="row"><h1>Impala to Presto</h1></div>

    {/* <div className="row">
    <div className="col-lg-6">
        <div className="container2"><img className="impala" src={logo2} alt="impala"/></div>
    </div>
    <div className="col-lg-6">
       <div className="container2"><img className="presto" src={logo3} alt="presto"/></div>
    </div>
    </div> */}
    <div className="row">
        <div className="col-lg-6">
        <div className="container2"><img className="impala" src={logo2} alt="impala"/></div>

        <div className="container2 extra">                     
                             <div>
                                 <textarea
                                  style={{ width: '99%', resize: 'none', outline: 'none' }}
                                  value={code}
                                  onChange={handleCodeChange}
                                  rows={20}
                                  placeholder="Enter your code here..."
                                />
                            </div>
                        </div></div>
        <div className="col-lg-6">
        <div className="container2"><img className="presto" src={logo3} alt="presto"/></div>
        <div className="container2 extra" style={{background:'white',padding:'5px'}}>
                        {/* <CodeEditor /> */}
                        <p style={{color:value1}}>{!result ?"Your result will show up here" : result}</p>
                        </div>
        </div>
    </div>
    <div className='row'><div><button className="click"   onClick={sendDataToPython}>Click To Translate</button></div></div>

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
     </div>

    // return <div className="Body">
    //     <div className="griditem body1">
    //         <h1 style={{fontSize:'70px',fontWeight:'700'}}>ImPress Tool</h1>
    //         <h3>Make your life Simple</h3>
    //     </div>
    //     <div className="griditem" style={{position:'relative'}}>

    //         <Quote />
    //     </div>
    //     <div className="griditem box">
    //         <div className="container">
               
    //             <div className="container2" style={{gridColumn:'span 2'}}>
    //                        <h1>Impala to Presto</h1>
    //             </div>
    //                     <div className="container2"><img className="impala" src={logo2} alt="impala"/></div>

    //                     <div className="container2"><img className="presto" src={logo3} alt="presto"/></div>

    //                     <div className="container2 extra">
    //                         <div>
    //                             <textarea
    //                               style={{ width: '99%', resize: 'none', outline: 'none' }}
    //                               value={code}
    //                               onChange={handleCodeChange}
    //                               rows={20}
    //                               placeholder="Enter your code here..."
    //                             />
    //                         </div>
    //                     </div>
                        // <div className="container2 extra" style={{background:'white',padding:'5px'}}>
                        // {/* <CodeEditor /> */}
                        // <p style={{color:value1}}>{!result ?"Your result will show up here" : result}</p>
                        // </div> 
    //                     <div className="container2"></div>
                
                
    //         </div>
    // //     </div>
    //     <div className="griditem"><button className="click"   onClick={sendDataToPython}>Click To Translate</button></div>
    //     <div className="griditem"></div>
    // </div>

}

        


export default HomeContent;