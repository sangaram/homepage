import "./resume.scss"

const ResumeItem = ({image, title, start, end, location, list, children}) => {

    return (
        <div className="resume-item">
            <div className="resume-item-left">
                { image && <img src={image} alt="logo"/>}
            </div>
            <div className="resume-item-right">
                <h4>{title}</h4>
                <h5 className="time-range">{start} - {end}</h5>
                <em className="location">{location}</em>
                <p>{children}</p>
                {list && (
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

const Resume = () => {
  return (
    <div className="resume" id="resume">
        <div className="resume-container">
            <div className="resume-header">
                <div>
                    <h2 className="section-title">Resume</h2>
                    <div className="bar"></div>
                </div>
            </div>
            <div className="resume-body">
                <div className="resume-container-left">
                    <h3 className="resume-title">Education</h3>
                    <ResumeItem
                        image={"telecom-paris.png"}
                        title="ENGINEERING DEGREE"
                        start={2021}
                        end="Present"
                        location="Telecom Paris, Palaiseau, France"
                    >
                        One of France's top prestigious general engineering schools in the Grandes Ecoles system. Equivalent to a top-tier university specializing in engineering studies.<br/>
                        Studied a very large spectrum of fields as computer science, physics, maths, economics, etc. And specialzing in Artificial Intelligence.<br/>
                        <strong>Grande Ecole:</strong> An institute on advanced specialized higher education. Equivalent to a top-tier American University.
                    </ResumeItem>
                    <ResumeItem 
                        image={"universite-paris-saclay.png"}
                        title="LICENCE DOUBLE DIPLÔME INFORMATIQUE & MATHÉMATIQUES"
                        start={2020}
                        end={2021}
                        location="Université Paris-Saclay, Orsay, France"
                    >
                        Third year of bachelor's degree. It is a double degree, an intensive program in maths and computer science. The equivalent of two bachelor's degree.<br/>
                        <strong>Mention:</strong> with highest honor.
                    </ResumeItem>
                    <ResumeItem 
                        image={"universite-grenoble-alpes.jpeg"}
                        title="LICENCE MATHÉMATIQUES & INFORMATIQUE"
                        start={2018}
                        end={2020}
                        location="Université Grenoble Alpes, Valence, France"
                    >
                        First and second years of my bachelor's degree in maths and computer science.<br/>
                        <strong>Mention:</strong> with highest honor.
                    </ResumeItem>
                </div>
                <div className="resume-container-right">
                    <h3 className="resume-title">Professional Experience</h3>
                    <ResumeItem
                        image={"CEA-List.jpeg"}
                        title="GenAI Research Intern in Computer Vision"
                        start="April 2024"
                        end="Present"
                        location="CEA List, Palaiseau, France"
                    >
                        <strong>Subject:</strong> Automatic image generation for team sports matches.<br/>
                        Working on a research project where the goal is to build an image generative model for generating realistic team sport matches (e.g soccer games). The main focus is to control the image generation by adding the ability to control many aspects of a scene including player positions and poses, camera calibration, etc.
                    </ResumeItem>
                    <ResumeItem
                        image={"Logo_LTCI.png"}
                        title="AI research project"
                        start="September 2023"
                        end="March 2024"
                        location="Télécom Paris, Palaiseau, France"
                    >
                        <strong>Subject:</strong> Contrastive Learning in Graph Neural Networks with Optimal Transport.<br/>
                        <strong>Supervisors:</strong> Jhony H. Giraldo and Fragkiskos Malliaros <br/>
                        Worked on a self-supervised learning (SSL) framework for graphs. In this project we embarked on an exploration of SSL approaches tailored to Graph Neural Networks (GNNs), with a particular emphasis on leveraging contrastive loss functions rooted in the theory of Optimal Transport (OT). Specifically, we delved into the use of the Fused Gromov-Wasserstein distance to compute our contrastive loss. The primary application under scrutiny is node classification, where we aimed to enhance the ability of GNNs to predict node labels in graph-structured data.
                    </ResumeItem>
                    <ResumeItem
                        image={""}
                        title="INTERN AT P4W"
                        start="July 2022"
                        end="September 2022"
                        location="P4W, Paris, France"
                    >
                        Web and Mobile development internship. Development of a social media application. In charge of the back-end of the application in NodeJS and deployment. Also worked on the front-end, which was done in ReactNative.
                    </ResumeItem>
                    <ResumeItem
                        image={"logo-lig.png"}
                        title="INTERN AT LABORATOIRE D'INFORMATIQUE DE GRENOBLE"
                        start="May 2022"
                        end="July 2022"
                        location="Laboratoire d'Informatique de Grenoble (LIG), Grenoble, France"
                    >
                        Worked on algorithms for inferring the structure of an automaton. More specifically, Mealy machines were the type of automaton being considered. The different algorithms had many parameters and my job was to find the best parameters for each algorithm and to compare the algorithms in their best settings on a benchmark.<br/>
                        <a href="http://proceedings.mlr.press/v93/groz19a/groz19a.pdf" target="_blank" rel="noreferrer" className="link">The paper</a>
                    </ResumeItem>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume