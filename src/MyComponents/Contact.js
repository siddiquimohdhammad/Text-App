import React from 'react'
// import "./MyComponents/Contact.css"
// import "src/MyComponents/Contact.css"
import './CSS/Contact.css'
function Contact() {
  return (
    <div className="m-5 p-5">
    <div className='container border border-danger p-5 bg-primary bg-gradient text-light'>
        

        <form className='m-15 p-10'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-warning">Submit</button>
</form>
       


    </div>
    </div>
  )
}

export default Contact