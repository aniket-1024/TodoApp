import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Footer } from "../components/Footer"


import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "../components/Button"

export const Signup = ()=>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    return (
        <div className=" flex h-screen flex-col justify-center bg-cover bg-hero" >
            <div className="flex justify-center text-yellow-f">
            <div className="rounded-lg bg-gray-dark w-80 text-center p-2 h-max px-4 bg-opacity-50">
                <Heading Label={'Sign Up'}/>
                <SubHeading Label={'Welcome to Todo App'}/>
                <InputBox onChange={ (e:any) => {setFirstName(e.target.value)}} placeholder="John" Label={"First Name"} />
                <InputBox onChange={ (e:any) => {setLastName(e.target.value)}} placeholder="Doe" Label={"Last Name"} />
                <InputBox onChange={ (e:any) => {setUsername(e.target.value)}} placeholder="email@gmail.com" Label={"Username"} />
                <InputBox onChange={ (e:any) => {setPassword(e.target.value)}} placeholder="123lkdf" Label={"Password"} />
                <Button label={"Sign up"} onClick={async()=>{
                        try{
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                password,
                                firstName,
                                lastName,
                            }); 
                            localStorage.setItem("id", response.data.id)
                            console.log("hello")
                        } catch(err:any){
                            console.log(err)
                        } finally{
                            navigate("/dashboard")
                        }
                        
                        
                        
                }} />
                <Footer label={'Already have an account?'} buttonText={'Signin'} to={'/signin'}/>
            </div>
        </div></div>
        
    )
}