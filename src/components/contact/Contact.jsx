import "./contact.scss"
import { FiMapPin } from "react-icons/fi"

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <div className="contact-container">
            <div>
                <h2>Contact</h2>
                <div className="bar"></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque dolor eos ipsa quidem, tenetur explicabo fugit beatae, quo doloribus laudantium ab quibusdam neque repellendus dolorum nobis inventore quos labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio praesentium sapiente expedita cum delectus est maiores unde, excepturi aut autem dicta dolor, adipisci aliquid ducimus reprehenderit velit doloribus quod!</p>
            <div className="info">
                <div className="left">
                    <div className="left-item">
                        <div className="icon-div">
                            <FiMapPin className="icon" />
                        </div>
                        <div className="info-div">
                            <h4>Location:</h4>
                            <p>16 rue André Blanc-Lapierre, 91190 Gif-sur-Yvette</p>
                        </div>
                    </div>
                    <div className="left-item">
                        <div className="icon-div">
                            <FiMapPin className="icon" />
                        </div>
                        <div className="info-div">
                            <h4>Email:</h4>
                            <p>amadousangare21@gmail.com</p>
                        </div>
                    </div>
                    <div className="left-item">
                        <div className="icon-div">
                            <FiMapPin className="icon" />
                        </div>
                        <div className="info-div">
                            <h4>Call:</h4>
                            <p>+33 7 55 14 06 88</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="name-email">
                        <div className="field">
                            <span>Your Name</span>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <span>Your Email</span>
                            <input type="email" />
                        </div>
                    </div>
                    <div className="field">
                        <span>Subject</span>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <span>Message</span>
                        <textarea>

                        </textarea>
                    </div>
                    <div className="submit">
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact