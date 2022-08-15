import { BsCardText } from "react-icons/bs";
import { MdOutlineQuiz } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const SideBar = () =>{
const [showLinks, setShowLinks] = useState(null)

    const toggleLinks = (e) =>{
        e.preventDefault()

        setShowLinks((state) => !state)
    }

    return(
        <div className="sidebar-con">

            <span className="sidebar-header">
            <h1 >Vocab</h1>
            <h1 id="sidebar-header-two">App</h1>
            </span>
            

                <a className="sidebar-list-con active">
                    <span className="sidebar-list-span">
                <BsCardText />
                <h3 className="sidebar-list">Cards</h3>

                    </span>
                </a>

                <a  className="sidebar-list-con">
                    <span className="sidebar-list-span">
                <MdOutlineQuiz />
                <h3 className="sidebar-list">Quiz</h3>

                    </span>
                </a>


               { showLinks ? <div className="sidebar-acc-links-con">
                    <Link href="login"className="sidebar-acc-links-button">Login</Link>
                    <Link href="register" className="sidebar-acc-links-button">Register</Link>
                </div> : ''}
                <div className="sidebar-user-con" onClick={toggleLinks}>
                    <h3>Not logged in.</h3>
                </div>

        </div>
    )
}

export default SideBar