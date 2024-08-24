import "./scrollToTopButton.scss"
import { AiOutlineArrowUp } from "react-icons/ai"
import { useState } from "react"

const ScrollToTopButton = () => {

    let main

    window.onload = () => {
        main = document.getElementById("main")
        console.log("main:", main)
    }

    const [scrollTop, setScrollTop] = useState(0)

    main.onscroll = (event) => {
        setScrollTop(event.target.scrollTop)
    }

    return (
        <div
            className={scrollTop > 0 ? 'lift-button visible' : 'lift-button'}
            onClick={() => {
                main.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }}>
            <AiOutlineArrowUp className="icon" />
        </div>
    )
}

export default ScrollToTopButton