import "./projects.scss"

// const ProjectItem = ({title, info, image, url}) => {

//     return (
//         <div className="project-item">   
//             <div className="wallpaper">
//                 <img className="project-image" src={image} alt="wallpaper" />
//             </div>
//             <div className="body">
//                 <h3>{title}</h3>
//                 <p>{info}</p>
//                 <div className="btn-container">
//                     <button><a href={url}>Demo</a></button>
//                 </div>
//             </div>
//         </div>
//     )
// }

const ProjectItem2 = ({ title, info, image, url }) => {

    return (
        <div className="project-item-2">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <div className="body">
                <h4>{title}</h4>
                <p>{info}</p>
                <a className="link" href={url} target="_blank" rel="noreferrer">Code</a>
            </div>
        </div>
    )
}
const Projects = () => {
  return (
    <div className='projects' id="projects">
        <div className="projects-container">
            <div>
                <h2 className="section-title">Projects</h2>
                <div className="bar"></div>
            </div>
            <div className="project-board">
                <ProjectItem2
                    title={"Translation with a Transformer"}
                    info={"Implementation of the Transformer by (Vaswani et .al, 2017) and application to Neural Machine Translation task from English to French."}
                    image={"ml.jpeg"}
                    url={"https://github.com/sangaram/translation_with_transformer"}
                />
                <ProjectItem2
                    title={"wav2vec2"}
                    info={"Implementation of the wav2vec 2.0 model introduced in the paper of (Baevski et .al, 2020) in which they present a new framework for self-supervised of representations from raw audio data."}
                    image={"ml.jpeg"}
                    url={"https://github.com/sangaram/wav2vec2"}
                />
                <ProjectItem2
                    title={"Variational Autoencoder"}
                    info={"Implementation of VAE's based on the paper of (Kingma et al., 2014) that introduces a new technique for generative modeling based on a latent variable model and a variational approximation of the true prior distrubtion with a deep neural network."}
                    image={"gen1.png"}
                    url={"https://github.com/sangaram/vae"}
                />
                <ProjectItem2
                    title={"Generative Adversarial Network"}
                    info={"Implementation of a GAN-based super resolution model introduced by (Ledig et al., 2017). Super resolution is the task of generating a high resolutiton version of a given lower resolution image. In this project I implemented from scratch and trained a model to generate 384x384 images from their 96x96 versions. Hence 4x upscaling factor."}
                    image={"hr4.png"}
                    url={"https://github.com/sangaram/gan"}
                />
                <ProjectItem2
                    title={"Denoising Diffusion Probabilistic Models"}
                    info={"Implementation of the denoising diffusion model introduced by (Ho et al., 2020). Diffusion models aims to progessively adding noise to an image until we get a pure noise and trying to reverse that process. The first step is called the diffusion (or forward) process and the second is called the denoising (or backward) process. In this paper, the noises of the forward process are sampled from gaussian distributions with means and variances depending on the time step. And the backward process is done with a UNet that computes the means and the variances of the distribution of each denoising step."}
                    image={"generation.gif"}
                    url={"https://github.com/sangaram/diffusion"}
                />
                <ProjectItem2
                    title={"Speech to Speech Machine Translation"}
                    info={"In this project I work on Speech to Speech Machine translation that aims to translation an speech from a source language to a target language. In this project I perform the task between French and English. There are many approaches for doing so, here I adopt a cascaded approach that is the most simple. Hence I perform Speech to Text (Automatic Speech Recognition), then Machine Translation, then Text to Speech (Speech synthesis)."}
                    image={"waveform.png"}
                    url={"https://github.com/sangaram/S2SMT"}
                />
            </div>
        </div>
    </div>
  )
}

export default Projects