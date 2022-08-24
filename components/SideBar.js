import { BsCardText } from "react-icons/bs";
import { MdOutlineQuiz } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const SideBar = (props) =>{
const [showLinks, setShowLinks] = useState(null)
const [currentPath, setCurrentPath] = useState("")
const { asPath } = useRouter()

    const toggleLinks = (e) =>{
        e.preventDefault()

        setShowLinks((state) => !state)
    }
    useEffect(() =>{
        setCurrentPath(asPath)

        
    },[])
    return(
        <div className="sidebar-con">

            <span className="sidebar-header">
            <h1 >Vocab</h1>
            <h1 id="sidebar-header-two">App</h1>
            </span>
            
                <Link href="/">
                <a className={currentPath == "/" ? "sidebar-list-con active" : "sidebar-list-con"} >
                    <span className={currentPath == "/" ? "span-active" : "sidebar-list-span"}>
                <BsCardText />
                <h3 className="sidebar-list">Cards</h3>

                    </span>
                </a>
                </Link>
                <Link href="quiz"> 
                <a className={currentPath == "/quiz" ? "sidebar-list-con active" : "sidebar-list-con"}>
                    <span className={currentPath == "/quiz" ? "span-active" : "sidebar-list-span"}>
                <MdOutlineQuiz />
                <h3 className="sidebar-list">Quiz</h3>

                    </span>
                </a>
                </Link>
            

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