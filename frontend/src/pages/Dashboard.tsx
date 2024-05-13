
import { useEffect, useState } from "react";
import { Dheader } from "../components/Dheader"
import { Dsubheader } from "../components/Dsubheader"
import { Todos } from "../components/Todos"
import axios from "axios";

export function Dashboard(){
    const [userData, setUserData] = useState("");
    let item = localStorage.getItem("id");
    let  id = (item)?parseInt(item, 10): 0;
    useEffect(() => {
        async function fetchData() {
            const response = await axios.post("http://localhost:3000/api/v1/user/getuser", {
                id
            });
            setUserData(response.data.firstName);
        }

        fetchData();
    }, [id]);
    return(
            <div className=" bg-white-dashbaord h-screen">

                <Dheader label={userData}/>

                <div className="pt-10 pb-3">
                    <Dsubheader label={id}/>
                </div>
                <div className="pb-3">
                    <Todos/>
                </div>
            </div>
       
    )
}