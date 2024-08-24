import "./sidebar.scss"
import { HiOutlineHome } from "react-icons/hi"
import { BiUser, BiCodeAlt } from "react-icons/bi"
import { AiOutlineFile } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { TbAward } from "react-icons/tb"
import { useContext, useState } from "react"
import { GlobalContext } from "../../context/globalContext/GlobalContext"

const SideBar = () => {
    const { openSideBar, activeTab, setActiveTab } = useContext(GlobalContext)
    const [displayEmail, setDisplayEmail] = useState(false)

    return (
        <div
            className={openSideBar ? "sidebar open" : " sidebar"}
        >
            <div className="top">
                <img className="profile-picture" src="Amadou.jpg" alt="profile" />
                <span className="name">
                    <a href="/">Amadou Siaka SANGARE</a>
                </span>
                <div className="social-links">
                    <div className="item">
                        <a href="https://www.linkedin.com/in/amadou-siaka-sangare/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className="social-icon" />
                        </a>
                    </div>
                    <div className="item" style={{cursor: "pointer"}} onClick={() => setDisplayEmail(true)}>
                        <SiGmail className="social-icon" />
                    </div>
                    <div className="item">
                        <a href="https://github.com/sangaram" target="_blank" rel="noreferrer">
                            <BsGithub className="social-icon" />
                        </a>
                    </div>
                </div>
                {displayEmail && <span className="email">amadousangare21@gmail.com</span>}
            </div>
            <div className="bottom">
                <a
                    href="#home"
                    className={activeTab === "home" ? "menu active" : "menu"}
                    onClick={() => setActiveTab("home")}
                >
                    <HiOutlineHome className="icon" />
                    <span>Home</span>
                </a>
                <a
                    href="#about"
                    className={activeTab === "about" ? "menu active" : "menu"}
                    onClick={() => setActiveTab("about")}
                >
                    <BiUser className="icon" />
                    <span>About</span>
                </a>
                <a
                    href="#resume"
                    className={activeTab === "resume" ? "menu active" : "menu"}
                    onClick={() => setActiveTab("resume")}
                >
                    <AiOutlineFile className="icon" />
                    <span>Resume</span>
                </a>
                <a
                    href="#certifications"
                    className={activeTab === "certs" ? "menu active" : "menu"}
                    onClick={() => setActiveTab("certs")}
                >
                    <TbAward className="icon" />
                    <span>Certifications</span>
                </a>
                <a
                    href="#projects"
                    className={activeTab === "projects" ? "menu active" : "menu"}
                    onClick={() => setActiveTab("projects")}
                >
                    <BiCodeAlt className="icon" />
                    <span>Projects</span>
                </a>
                {/* <a
                    href="#contact"
                    className={activeTab === "contact" ? "menu active" : "menu"}
                    onClick={() => setActiveTab("contact")}
                >
                    <BiEnvelope className="icon" />
                    <span>Contact</span>
                </a> */}
            </div>
        </div>
    )
}

export default SideBar