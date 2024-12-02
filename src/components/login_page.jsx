import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
const Login  = (probs) =>{
    const [upper_cont,set_upper] = useState(true)
    const [name,set_name] = useState("")
    const [pass,set_pass] =useState("")
   const arr =probs.arr;
   const set_arr =probs.set_arr
   const landing = useNavigate("")
    const check =() =>{
        
        let usernotfound = false
        arr.map((item) =>{
            if(item.name == name && item.pass == pass){
                console.log("success")
                usernotfound=true
                set_upper(true)
                landing('/land',{state:{user:name}})
            }
        })
        if(usernotfound==false){
            console.log("failed")
            set_upper(false)
        }
    }
    const handle_name =(event)=>{
        set_name(event.target.value)
    }
    const handle_pass =(event)=>{
        set_pass(event.target.value)
    }
    return(
        <div>
            <h1 style={{fontSize:"22px"}}>Hey Hi</h1>
            {upper_cont?<p>I help manage your activities affter you login :)</p>:<p style={{color:"red"}}>Please SingUp First</p>}
            
            <input type="text" value={name} onChange={handle_name} placeholder="Enter Your Name" style={{border:"black 2px solid",padding:"5px",marginTop:"7px",borderRadius:"5px"}} /><br></br>
            <input type="text" value={pass} onChange={handle_pass} placeholder="Enter Your Password" style={{border:"black 2px solid",padding:"5px",marginTop:"7px",borderRadius:"5px"}} /><br></br>
            <button onClick={check} style={{backgroundColor:"violet",padding:"5px",marginTop:"10px",width:"85px",borderRadius:"10px"}}>Login</button>
            <p>Don't have an account? <Link to="SignUp" style={{color:"darkblue",textDecoration:"underLine"}}>Sign UP</Link></p>
        </div>
    )
}

export default Login;