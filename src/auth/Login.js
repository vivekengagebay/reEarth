import Layout from "../components/Layout";
import "../styles/auth.scss"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoEarth, isLoading, setTimeoutError, setTimeoutSuccess } from "../utilis";
import { getReq, postReq } from "../Request";
function Login() {
  const navigate = useNavigate()
  const parentContext = useContext(GoEarth)
  const initialLoginObj = {
    email: "",
    password: ""
  }
  const [loginData, setLoginData] = useState(initialLoginObj)


  const handleSubmit = async (event) => {
    event.preventDefault();

    // const vaildLoginDetails = {
    //   email: "mannevivek21@gmail.com",
    //   password: "Vivek@12"
    // }
let username 
    try {
      const response = await postReq("http://localhost:8080/reearth/v1/login", loginData)
      console.log(response, "response.data");
      try {
        const userDataRes = await getReq(
          `http://localhost:8080/reearth/v1/getUserDetails?emailid=${loginData.email}`
        );
        username = userDataRes.data.result.username
        // addCountry["country"] = "india";
        // setUpdateData({ ...addCountry });
      } catch (err) {
        console.log(err, "err");
      }
      parentContext.setIsLoggedIn(response.data)
      localStorage.setItem('email', loginData.email);
      localStorage.setItem('username', username);
      parentContext.setShowSuccessMessage(response.data.message)
      parentContext.setIsLoading(true)
      setTimeout(() => {
        parentContext.setShowSuccessMessage("")
        parentContext.setIsLoading(false)

        navigate("/")
      }, 2000);
    }
    catch (err) {
      console.log(err, "err");
      parentContext.setErrorMessage(err.response.data.message)
    }



    // if (vaildLoginDetails.email === loginData.email && vaildLoginDetails.password === loginData.password) {
    //   setTimeoutSuccess(parentContext, "Login successfull")
    //   parentContext.setIsLoggedIn(true)
    //   parentContext.setIsLoading(true)
    //   setTimeout(() => {
    //     parentContext.setIsLoading(false)
    //     navigate("/")
    //   }, 2000);
    // }
    // else {
    //   setTimeoutError(parentContext, "Invaild email or password")
    // }
    // const json = {};
    // const form = new FormData(event.target);
    // form.forEach((val, key) => (json[key] = val));
    // console.log(props, "props");
    // event.preventDefault();
    //   var response = authenticateLoginUser(json);
    //   response.then(function (authInfoJSON) {
    //     console.log(authInfoJSON) //console auth-user details
    //     storage.setChromeStorage(
    //       AUTH_USER_API_KEY_NAME,
    //       authInfoJSON,
    //       function () {
    //         set_ENGAGEBAY_AUTH_USER_DATA(authInfoJSON);
    //         console.log(ENGAGEBAY_AUTH_USER_DATA, "ENGAGEBAY_AUTH_USER_DATA")
    //         setIsLoggedIN(true);
    //         console.log("ENGAGEBAY_AUTH_USER_DATA : ", get_ENGAGEBAY_AUTH_USER_DATA());
    //       });
    //   })
  };

  console.log(loginData, "loginData");
  return (
    <div className="auth-container d-flex vh-100 align-items-center justifyc-content-center">
      {/* <Layout> */}
      {parentContext.isLoading ? (
        <img src="https://i.ibb.co/f1WgH1T/5.gif" style={{ width: "200px", height: "200px" }} />
      ) : (
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
            </div>
            <p className="text-center my-3 modal-title">GoEarth Login</p>
            <div className="form-group">
              <input type="text" className="form-control" name="Email" placeholder="Email" required="required" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            </div>
            <button type="submit" className="w-100 btn btn-primary btn-block btn-lg">LOGIN</button>
            {/* <button className="w-100 my-3 btn btn-primary btn-block btn-lg">SIGN IN WITH G SUITE</button> */}
          </form >
          <div className="text-center small mt-2">Don't have an account? <a href="/signup" className="text-decoration-none fw-bold" >Sign up</a></div>
        </div >
      )}

      {/* </Layout> */}
    </div>
  );
}

export default Login;

