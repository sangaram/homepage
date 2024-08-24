import "./about.scss"
// import { MdKeyboardArrowRight } from "react-icons/md"

// const InfoItem = ({title, value}) => {

//     return (
//         <div className="info-item">
//             <MdKeyboardArrowRight className="arrow" />
//             <strong>{title}:</strong>
//             <span>{value}</span>
//         </div>
//     )
// }

const About = () => {

    return (
        <div className='about' id="about">
            <div className="about-container">
                <div>
                    <div className="section-title">
                        About
                    </div>
                    <div className="bar"></div>
                </div>
                <p>
                    Currently pursuing a Master of Science in Engineering at <a href="https://www.telecom-paris.fr" className="link" target="_blank" rel="noreferrer">Télécom Paris</a>, one of France's top prestigious general engineering schools in the Grandes Ecoles system. I had courses in theoretical computer science, signal processing and machine learning.<br/>
                    <strong>My courses in theoretical computer science:</strong><br/>
                    <ul>
                        <li>Computability theory</li>
                        <li>Logic</li>
                        <li>Computational complexity theory</li>
                        <li>Combinatorial Optimisation and combinatorics</li>
                        <li>Games theory</li>
                        <li>Distributed computing through combinatorial topology</li>
                        <li>Advanced algorithms</li>
                        <li>Graph and Cluster Analysis</li>
                    </ul>
                    <br/>
                    <strong>My courses machine learning:</strong><br/>
                    <ul>
                        <li>Time series</li>
                        <li>Statistics – Linear models</li>
                        <li>Machine Learning</li>
                        <li>Machine Learning in high dimension</li>
                        <li>Speech and audio processing</li>
                        <li>Representation of signals</li>
                        <li>Optimization for machine learning</li>
                        <li>Advanced Statistics</li>
                        <li>Introduction to deep learning</li>
                        <li>Probabilistic Models and Machine Learning</li>
                        <li>Programming with GPU for Deep Learning</li>
                        <li>Reinforcement learning</li>
                        <li>Deep Learning based Computer Vision</li>
                        <li>Kernel Machines</li>
                        <li>Sequence-to-Sequence Models for NLP and Speech Processing</li>
                    </ul>
                    <br/>
                    Besides technical courses, I also did courses in economics, management, social sciences.
                </p>
                {/* <div className="info">
                    <div className="profile">
                        <img src="Amadou.jpg" alt="profile"/>
                    </div>
                    <div className="details">
                        <h3>
                            Engineer student at Telecom Paris
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente, soluta laboriosam sequi eligendi illo quibusdam recusandae culpa ipsum ratione voluptatum reiciendis, consectetur veniam reprehenderit impedit! Eaque minima dicta saepe?
                        </p>
                        <div className="two-cols">
                            <div className="left">
                                <InfoItem title={"Birthday"} value={"17 August 2000"} />
                                <InfoItem title={"Phone"} value={"+33 7 55 14 06 88"} />
                                <InfoItem title={"City"} value={"Gif-sur-Yvette"} />
                            </div>
                            <div className="right">
                                <InfoItem title={"Age"} value={"22"} />
                                <InfoItem title={"Degree"} value={"Engineer"} />
                                <InfoItem title={"Email"} value={"amadousangare21@gmail.com"} />
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore, voluptatum earum quia ratione dicta, veritatis cupiditate nobis, voluptatibus eveniet voluptates esse. Ex eius tenetur est laborum eveniet, ipsam recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus ullam recusandae culpa odit vitae vel non illum nam est libero dolores saepe repellat voluptates laboriosam quod, architecto nobis quae?
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default About