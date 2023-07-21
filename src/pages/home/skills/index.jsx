import React from "react";
import "./index.css"

const skillset = {
  GameDevelopemnt: ["Unity", "UnrealEngine"],
  MultiplayerGameDevelopment: ["PhotonNetwork(Unity)"],
  ArtificialIntellegence: ["Behavior Trees", "Pathfinding(A*, Djkstra, BFS/DFS)", "Finite State Machine(FSM)", "Goal Oriented Action Planning(GOAP)"],
  WebDevelopemnt: ["HTML5", "CSS3", "React.js", "Node.js"],
  EngineDevelopment: ["Graphics Libraries: OpenGL DirectX12 HLSL GLSL", "Systems Design", "Operation System Integration", "Cross Plaform Support"],
  GameDesign: ["Level Design", "Game Mechanics", "User Interface(UI) Design", "Gameplay Prototyping"],
  ProfilingAndAnalysis: ["Memory Management"],
  ProgrammingLanguages: ["C++", "C#", "Python", "JavaScript"],
  DataStructures: ["Algorithm Analasys", "Trees", "Graphs", "Optimization"],
  VersionControl: ["GitHub"],
  Agile: ["Test Driven Development(TDD)", "Continuous Integration / Continuous Deployment (CI/CD)"],
  Other: ["Problem Solving", "Project Management", "Project Planning", "Creating Thinking and Innovation", "TaskScheduling", "Conecpt Generation", "Experementation"]
}

function SkillsPage() {
  return (
    <div class="skill-tree">
      {
        Object.keys(skillset).map((category) => (
          <div key={category} className="skill-card">
            <h3>{category}</h3>
            <div>
              {
              skillset[category].map((skill) => (
                <li key={skill}>{skill}</li>
              ))
              }
            </div>
          </div>
        ))
      }
    </div>

  )

} export default SkillsPage;