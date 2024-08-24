import "./certifications.scss"

const Certification = ({title, provider, desc, skills, url}) => {

    return (
        <div className="certification">
            <span>{title}</span>
            <div className="body">
                {provider && <h3 className="provider">Provided by {provider}</h3>}
                {desc && <p className="desc">{desc}</p>}
                {skills && (
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                )}
                <a href={url} target="_blank" rel="noreferrer">View</a>
            </div>
        </div>
    )
}

const Certifications = () => {
  return (
    <div className='certifications' id="certifications">

        <div className="certifications-container">
            <div>
                <h2 className="section-title">Certifications</h2>
                <div className="bar"></div>
            </div>
            <div className="certifications-board">
                <Certification
                    title={"Machine Learning Specialization"}
                    provider={"DeapLearning.AI and Stanford University"}
                    desc={"A Coursera Machine Learning course"}
                    skills={[
                        "Supervised Machine Learning: Regression and Classification",
                        "Advanced Learning Algorithms",
                        "Unsupervised Learning, Recommenders, Reinforcement Learning"
                    ]}
                    url={"pdf/Coursera D4QA9JRC8K5H.pdf"}
                />
                <Certification
                    title={"Machine Learning Engineering for Production (MLOps)"}
                    provider={"DeapLearning.AI"}
                    desc={"A Coursera Machine Learning course"}
                    skills={[
                        "Introduction to Machine Learning in Production",
                        "Machine Learning Data Lifecycle in Production",
                        "Machine Learning Modeling Pipelines in Production",
                        "Deploying Machine Learning Models in Production"
                    ]}
                    url={"pdf/Coursera 5NDCA47TJSZF.pdf"}
                />
            </div>
        </div>
    </div>
  )
}

export default Certifications