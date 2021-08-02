
import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank!");
        }else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container">
            <h3 className="my-3">Add a ToDo:</h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="htmlForm-label">Task Title</label>
                <br></br>
                <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}} className="htmlForm-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="htmlForm-label">Description</label>
                <br></br>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="htmlForm-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}
