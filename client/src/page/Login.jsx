import { useState } from "react"


const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email,password)
  }

  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-6"> 
         <img src="/images/login.png" alt="a girl trying to do registration"
          width="400" height="400" />
          </div>
        <div className="col-6">
        <h3>Login form</h3>
        <br/>
          <form onSubmit={handleSubmit}>
         <div className="form-group">
          <label>Email</label>
          <input 
            type="email"
            name='email'
            value={email}
            placeholder="enter the email "
            onChange={(e)=>setEmail(e.target.value)}
            required
            autoComplete="off"
          />
         </div>

         <div className="form-group">
          <label>Password</label>
          <input 
            type="password"
            name='password'
            value={password}
            placeholder="enter the your password "
            onChange={(e)=>setPassword(e.target.value)}
            required
            autoComplete="off"
          />
         </div>
         <button className="btn btn-primary btn-sm mt-1" type="submit">Login </button>

          </form>
        </div>
       
      </div>
    </div>
  )
}

export default Login