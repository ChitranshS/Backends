export function Todos({todos})
{
    return <div>
        {todos.map(function(todo){
            return <div>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <button onClick={()=>{
                    fetch(`http://localhost:3000/todo/${todo._id}`,{
                        method:"PUT",
                        body:JSON.stringify({
                            completed:!todo.completed
                        }),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }).then(async (res)=>{
                        const json = await res.json
                        console.log(json)
                    })
                }}>{todo.completed == true?"completed":"Mark as completed"}</button>
            </div>
        })}
    </div>
}