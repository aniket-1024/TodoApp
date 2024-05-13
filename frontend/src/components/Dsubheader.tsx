
import { useState } from "react";
import { Buttond } from "./Buttond";
import { InputBox } from "./InputBox";
import axios from "axios";

export function Dsubheader({label} : {label:number}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div>
            <div>
                <InputBox Label={"Title"} placeholder={"Enter your title"} onChange={(e:any)=>{setTitle(e.target.value)}}/>
                <InputBox Label={"Description"} placeholder={"Enter your Description"} onChange={(e:any)=>{setDescription(e.target.value)}}/>
                <div className="text-center">
                    <Buttond label={"ADD"} onClick={async()=>{
                        await axios.post("http://localhost:3000/api/v1/todo/add", {
                            title:title,
                            description:description,
                            userId: label   
                        })
                    }}/>
                </div>
            </div>
        </div>
    )
}