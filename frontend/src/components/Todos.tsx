import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import axios from "axios";

export function Todos() {
    const data = localStorage.getItem("id");
    const userId = data? parseInt(data,10): 1;
    interface params{
        title:string,
        description:string,
        done:false
    }
    const arr:params[] = [
        {
            title:"",
            description:"",
            done: false
        }
    ]
    const [todos, setTodos] = useState(arr)
    useEffect(() => {
        async function fetchTodo() {
            const response = await axios.post("http://localhost:3000/api/v1/todo/get", {
                userId: userId            
            })    
            setTodos(response.data)  
        }
        fetchTodo();
    }, [userId,todos])
    return (
        <div className="pt-5 pl-1 pr-1">
            {todos.map((todo) => (
                <Todo title={todo.title} description={todo.description} done={todo.done} />
            ))}
        </div>
    )
}