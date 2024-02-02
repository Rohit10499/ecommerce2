import { useState } from "react"


const Register = () => {
  const [username,setUserName] =useState("")
  const [email,setEmail] =useState("")
  const [phone,setPhone] =useState("")
  const [password,setPassword] =useState("")


  const handleSubmit=(e)=>{
     e.preventDefault();
  
  }
  return (
   <>
    <div className="container ">
      <div className="row w-100">
        <div className=" col-6 ">
          <img src="/images/register.png" alt="a girl trying to do registration"
          width="400" height="400" />
        </div>
        <div className=" col-6  text-center ">
          <h1 >REGISTRATION FORM</h1>
          <form className="from-group" onSubmit={handleSubmit}>
            <div>
              <label >username</label>
              <input 
                type="text"
                name="name"
                onChange={(e)=>setUserName(e.target.value)}
                placeholder="enter your username"
                value={username}
                id="username"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label>email</label>
              <input 
                type="email"
                name="email"

                placeholder="enter your email"
                value={email}
                id="username"
                onChange={(e)=>setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label>phone</label>
              <input 
                type="text"
                name="phone"
                placeholder="enter your phone"
                onChange={(e)=>setPhone(e.target.value)}
                value={phone}
                id="phone"
                required
                autoComplete="off"
              />
            </div>

            <div>
              <label>password</label>
              <input 
                type="password"
                name="password"
                placeholder="enter your password"
                value={password}
                id="password"
                required
                autoComplete="off"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm mt-1" >Register Now</button>
          </form>

         
        </div>
      </div>
    </div>
   </>
  )
}

export default Register