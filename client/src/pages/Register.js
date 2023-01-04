import React , {useState } from 'react'
import {useDispatch} from 'react-redux';
import { loginfailure, loginStart, loginSuccess } from '../redux/userRedux';
import { publicRequest } from '../requestMethod';
function Register() {
  const dispatch = useDispatch();
  const [username , setusername] = useState();
  const [password , setpassword] = useState();
  const [email , setemail] = useState();
  const [confirmPass , setconfirmPass] = useState();
  const handleRegister= async (e)=>{
    e.preventDefault();
    dispatch(loginStart());
    try{
      const res = await publicRequest.post("/user/register" , {
        username , 
        email,
        password,
        confirmPass
      });
      dispatch(loginSuccess(res.data));
    }
    catch(err){
      loginfailure();
    }
  }
  return (
    <>
     <div
        className="container-fluid"
        style={{
          background: "linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingLeft : "0%"
        }}
      >
        <div className="container signin-container">
          <div className="sign-image"></div>
          <div className="container reg-content" style={{ color: "white" }}>
            <h3>Registration Form</h3>
            <form action="" style={{width : "100%" , display : "flex" , alignItems : "center" , flexDirection : "column" , marginBottom : "20px"}} >
              <div className="mb-3 form-input">
                <input
                  type="text"
                  className="form-controll"
                  name="username"
                  placeholder="Username"
                  onChange={(e)=>{setusername(e.target.value)}}
                />
              </div>
              <div className="mb-3 form-input">
                <input
                  type="email"
                  className="form-controll"
                  name="email"
                  placeholder="Email Address" 
                  onChange={(e)=>{setemail(e.target.value)}}
                />
              </div>
              <div className="mb-3 form-input">
                <input
                  type="password"
                  className="form-controll"
                  name="password"
                  placeholder="Password" 
                  onChange={(e)=>{setpassword(e.target.value)}}
                />
              </div>
              <div className="mb-3 form-input">
                <input
                  type="password"
                  className="form-controll"
                  name="confirmPassword"
                  placeholder="Confirm Password" 
                  onChange={(e)=>{setconfirmPass(e.target.value)}}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3" onClick={(e)=>{handleRegister(e)}}>
                Submit
              </button>
              <p style={{paddingTop : "10px"}}>Already Logged In? <a href= "/login" style={{textDecoration : "none"}} >Login.</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register