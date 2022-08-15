import { useState } from "react"

import { IoLockClosedSharp } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";

import Link from "next/link";
const Login = () => {

    const [currentInput, setCurrentInput] = useState(null)

    const toggleCurrentInput = (e) => {
        e.preventDefault()
        setCurrentInput(e.target.name)

    }

    const submitAccountForm = (e) => {
        e.preventDefault()

        console.log('logged in')
    }
    return (
        <div className="account-con">

            <div className="account-form-con">



                <div className="account-form-left-con">
                    <div className="account-form-header-con">
                        <h1>Login</h1>
                    </div>

                    <div className="account-form-curve" />
                </div>


                <form className="account-form-input-con">


                    <div className="account-form-input-con">

                        <label htmlFor="username"><span><BsPersonFill className="account-form-icons"/>Username</span></label>
                        <input onClick={toggleCurrentInput} name="username" className="account-form-input" />

                        <label htmlFor="password"><span><IoLockClosedSharp className="account-form-icons"/>Password</span></label>
                        <input onClick={toggleCurrentInput} className="account-form-input" name="password" />

                    <div className="account-form-submit-con">
                        <button type="submit" className="account-form-submit" onClick={submitAccountForm}>Login</button>
                        <span>Already Registered? <Link className="account-form-login-link" href="register"> Register</Link> </span>
                    </div>
                    </div>


                </form>



            </div>

        </div>
    )
}


export default Login;