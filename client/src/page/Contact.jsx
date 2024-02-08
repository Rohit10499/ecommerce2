import { useState } from "react"


const Contact = () => {
  const [contact,setContact]=useState({
    username:"",
    email:"",
    maeesage:""
  });
 

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setContact({
      ...contact,
      [name]:value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(contact)

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
              name="username"
              value={contact.username}
              className="form-control"
          
              placeholder="Enter user name"
              required
              autoComplete="off"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              value={contact.email}
              id="email"
              placeholder="Enter Email"
              required
              autoComplete="off"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              type="text"
              name="message"
              value={contact.message}
              cols='30'
              rows='8'
              id="message"
              required
              autoComplete="off"
              onChange={handleInput}
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