const SignIn = ()=>{
    return(
        <button className='text text-success' onClick={()=>{
            sessionStorage.setItem("signKey","okay")
        }}>SignIn</button>
    )
}

export default SignIn