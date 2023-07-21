import React from "react"
import "./index.css"
import SkillsPage from "../skills"
import profileImg from "./profile.jpg"

function AboutPage (){
    
    const bio = 
    [
        "Hi there! My name is Austin Lynes, and I'm a passionate game developer and programmer based in Brookings, Oregon. From a young age, I've been fascinated by the world of technology and the possibilities it presents. My journey into the world of programming began over 7 years ago when I decided to embark on a self-taught programming adventure.",
        "As a self-taught programmer, I explored various programming languages and dived deep into the world of software development. I enjoyed the thrill of solving complex problems, creating innovative solutions, and witnessing the tangible results of my code. My self-taught journey has not only honed my technical skills but has also instilled in me a strong sense of determination and a relentless curiosity to explore new possibilities.",
        "Driven by my passion for both gaming and programming, I decided to pursue my dreams further by enrolling in Full Sail University's prestigious Game Development program. Throughout my bachelor's program, I was exposed to a diverse range of game development disciplines, from designing captivating game mechanics to crafting immersive game worlds. The program provided me with invaluable hands-on experience and solidified my foundation in game development.",
        "With a blend of self-taught expertise and formal education, I have developed a comprehensive skill set that encompasses a wide range of technologies and methodologies. From utilizing popular game engines like Unity and UnrealEngine to mastering the art of multiplayer game development with PhotonNetwork, I thrive on creating engaging and unforgettable gaming experiences.",
        "In addition to game development, I'm well-versed in Artificial Intelligence, having dived into concepts like Behavior Trees, Pathfinding algorithms (A*, Dijkstra, BFS/DFS), Finite State Machines (FSM), and Goal-Oriented Action Planning (GOAP). These skills have allowed me to create intelligent and dynamic in-game entities that bring life and realism to virtual worlds.",
        "On the web development front, I have a solid grasp of HTML5, CSS3, React.js, and Node.js, enabling me to craft interactive and responsive web applications that seamlessly integrate with gaming experiences.",
        "One of my strengths lies in engine development, where I've gained expertise in Graphics Libraries such as OpenGL and DirectX12, as well as systems design and cross-platform support. This enables me to create cutting-edge gaming engines that deliver exceptional performance and stunning visual experiences.",
        "I firmly believe that great gameplay is at the core of every successful game, and I'm dedicated to crafting experiences that captivate players and keep them immersed in the game world.",
        "When I'm not busy developing games or programming, you can find me immersing myself in various programming challenges, experimenting with new technologies, and continuously learning and growing as a developer. I thrive in a dynamic and collaborative environment, where I can contribute my creativity, problem-solving abilities, and expertise to create outstanding gaming experiences.",
    ]

    return (
    <div className="about-me">
        <div className="top">
            <img src={profileImg}/>
            <div className="bio">
                {bio.map(paragraph => <p>{paragraph}</p>)}            
            </div>
        </div>
        <SkillsPage/>
    </div>
    )

}

export default AboutPage;