import "./switchButton.scss"
import { BiX, BiMenu } from "react-icons/bi"
import { useContext } from "react"
import { GlobalContext } from "../../context/globalContext/GlobalContext"

const SwitchButton = () => {
    const { openSideBar, setOpenSideBar } = useContext(GlobalContext)

    return (
        <div className='switch-button'>
            {
                openSideBar ? (
                    <BiX className="icon" onClick={() => setOpenSideBar(false)} />
                ) : (
                    <BiMenu className="icon" onClick={() => setOpenSideBar(true)} />
                )
            }
        </div>
    )
}

export default SwitchButton