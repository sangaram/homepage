import "./home.scss"
import { init } from "ityped"
import { useEffect } from "react"
import { useRef } from "react"

const Home = () => {
    const ref = useRef()

    useEffect(() => {
        init(ref.current, { showCursor: true, backDelay: 2000, strings: ['an Engineer Student']})
    }, [])
    return (
        <div className='home' id="home">
            <h1>Amadou Siaka SANGARE</h1>
            <p className="title">I'm <span className="dynamic-text" ref={ref}></span></p>
        </div>
    )
}

export default Home