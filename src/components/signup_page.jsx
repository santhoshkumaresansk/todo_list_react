import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
const SignUp = (probs) =>{
    const arr = probs.arr
    const set_arr =probs.set_arr
    const navigate = useNavigate("")
   /* const [arr,set_arr] = useState([
        {
            name:"san",
            pass:123,
        },
        {
            name:"rithu",
            pass:1234,
        }
    ])*/

        const [user_name,set_username] =useState("")
        const [user_pass,set_userPass] =useState("")
        const [user_Conpass,set_conpass] =useState("")

        const handle_username = (event) =>{
            set_username(event.target.value)
        }
        const handle_userpass = (event)=>{
            set_userPass(event.target.value)
        }
        const handle_conpass =(event) =>{
            set_conpass(event.target.value)
        }
        const click = ()=>{
            set_arr([...arr,{name:user_name,pass:user_pass}])
            console.log(arr)
            navigate("/")
        }
    return(
        <div>
            <h1 style={{fontSize:"22px"}}>Hey Hi</h1>
            <p>You can Signup here :)</p>
            <input type="text" onChange={handle_username} value={user_name} placeholder="username" style={{border:"black 2px solid",padding:"5px",marginTop:"7px",borderRadius:"5px"}} /><br></br>
            <input type="text" onChange={handle_userpass} value={user_pass} placeholder="Password" style={{border:"black 2px solid",padding:"5px",marginTop:"7px",borderRadius:"5px"}} /><br></br>
            <input type="text" onChange={handle_conpass} value={user_Conpass} placeholder="Confirm Password" style={{border:"black 2px solid",padding:"5px",marginTop:"7px",borderRadius:"5px"}} /><br></br>
            <button onClick={click}  style={{backgroundColor:"gold",padding:"5px",marginTop:"10px",width:"85px",borderRadius:"10px"}}>SignUp</button> <span>Already have account <Link to="/" style={{color:"darkblue",textDecoration:"underLine"}}>Login</Link></span>

        </div>
    )
}

export default SignUp;