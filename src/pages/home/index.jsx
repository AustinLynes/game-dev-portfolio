import React from "react";
import "./index.css"

import testVideo from "./assets/testVideo.mp4"

import AboutPage from "./about"
import SkillsPage from "./skills"
import ContactPage from "./contact"


function HomePage (){
    return (
    <div className="home-page">
        <video autoPlay muted loop>
        <source src={testVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <AboutPage/>
        <SkillsPage/>
        <ContactPage/>

    </div>
    )

}
export default HomePage;