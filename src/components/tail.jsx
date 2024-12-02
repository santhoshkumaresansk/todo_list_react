import { useState } from "react";

const Tail =()=>{
    const [input_val,set_val] =useState("")
    const [arr,set_arr] =useState([])
    const [boo,set_boo] =useState(true)
    const handle_input =(event)=>{
        set_val(event.target.value)
    }
    const handle_arr = () =>{
        set_arr([...arr,input_val])
        set_val("")
    }
    const del =(idx)=>{
        arr.splice(idx,1)
        set_arr([...arr])


    }
    return(
        <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:"20px"}}>
            <div>
                <h2 style={{marginBottom:"5px"}}>Manage Activities</h2>
               <span><input type="text" placeholder="Next Activity?" style={{border:"2px solid black",padding:"3px"}} value={input_val} onChange={handle_input} />
               <button onClick={handle_arr} style={{backgroundColor:"black",color:"white",padding:"5px",marginLeft:"-1px"}}>Add</button></span>
            </div>
            <div style={{width:"700px",backgroundColor:"skyblue",padding:"2%",borderRadius:"10px 10px 0px 0px"}}>
                <h2 style={{marginBottom:"5px"}}>Today's Activity</h2>
                {
                    arr.length==0?<p style={{fontSize:"small"}}>You haven't added anything yet</p>:""
                }
                
                {
                    arr.map((item,idx)=>{
                        return <li style={{listStyle:"none",marginBottom:"3px"}}>{idx+1}. {item} <button onClick={()=>{del(idx)}} style={{backgroundColor:"red",color:"white",padding:"2px",fontSize:"small"}}>Delete</button></li>
                    })
                }
            </div>
        </div>
    )
}

export default Tail;