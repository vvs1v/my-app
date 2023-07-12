import React from "react"
import Header from "./Header"
import HomeContent from "./HomeContent"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Impress(){
    return <>
        <Header />
        <HomeContent />
    </>
}
export default Impress;