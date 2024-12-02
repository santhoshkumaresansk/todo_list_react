import {useLocation} from 'react-router-dom'
function Head(){
    const location =useLocation("")
    return(
        <div>
            <h1 style={{fontSize:"30px"}}>Hello {location.state.user}</h1>
            <h6>I help you manage your activities :)</h6>
        </div>
    )
}

export default Head;