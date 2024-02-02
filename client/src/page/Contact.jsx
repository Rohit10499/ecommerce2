import { useState } from "react"


const Contact = () => {
  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(userName,email,message)

  }
  return (
   <>
    <div className="container">
      <div className="row w-100">
        <div className="col-6">
          <h1>Contact Us</h1>
        <img src="/images/support.png" alt="contact" width="400px"
          height="400px" />
        </div>
        <div className="col-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text"
              name="userName"
              value={userName}
              id="username"
              placeholder="Enter user name"
              required
              autoComplete="off"
              onChange={(e)=>setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Enter Email"
              required
              autoComplete="off"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              type="text"
              name="message"
              value={message}
              cols='30'
              rows='8'
              id="message"
              required
              autoComplete="off"
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-sm mt-1" type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
   </>
    
  )
}

export default Contact