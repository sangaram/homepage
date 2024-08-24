import "./skills.scss"

// const SkillItem = ({title, level}) => {
//     return (
//       <div className="skill-item">
//         <span className="skill-title">{title}</span>
//         <span className="skill-level">{level}</span>
//       </div>
//     )
// }

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <div>
          <h2 className="section-title">Skills</h2>
          <div className="bar"></div>
        </div>
        <div className="details">
          <div className="sub-section">
            <h3 className="sub-section-title">Programming Languages:</h3>
            <span>Java, JavaScript, Python, C, C++</span>
          </div>
          <div className="sub-section">
            <h3 className="sub-section-title">Softwares:</h3>
            <span>Git, Docker, Kubernetes, SLURM</span>
          </div>
          <div className="sub-section">
            <h3 className="sub-section-title">Frameworks:</h3>
            <span>React, ReactNative</span>
          </div>
          <div className="sub-section">
            <h3 className="sub-section-title">Libraries:</h3>
            <span>Pytorch, TensorFlow</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills