import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import Button from "../components/Button"
import { Footer } from "../components/Footer"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signin = ()=>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    return(
        <div className=" flex h-screen flex-col justify-center bg-cover bg-hero" >
        <div className="flex justify-center text-yellow-f">
        <div className="rounded-lg bg-gray-dark w-80 text-center p-2 h-max px-4 bg-opacity-50">
            <Heading Label={"Sign In"}/>
            <SubHeading Label={"Enter your Details"}/>
            <InputBox Label={"Username"} placeholder={"email"} onChange={(e:any) => {setUsername(e.target.value)}}/>
            <InputBox Label={"Password"} placeholder={"******"} onChange={(e:any) => {setPassword(e.target.value)}}/>
            <Button label={"Sign In"} onClick={async() => {
                let response = await axios.post("http://localhost:3000/api/v1/user/signin" , {
                    username,
                    password
                })
                
                localStorage.setItem("id", response.data.id)
                navigate('/dashboard')
                
            }}/>
            <Footer label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
        </div>
        </div>
    )
}