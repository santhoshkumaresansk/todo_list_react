function Body(probs){
    return(
        <div style={{backgroundColor:`${probs.color}`,width:"300px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}>
            <div>
            <h3>{probs.one}</h3>
            <p>{probs.two}</p> 
            </div>
            
        </div>
    )
}

export default Body