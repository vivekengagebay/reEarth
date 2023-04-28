import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useContext, useState } from "react";
import { GoEarth } from "../utilis";
import { postReq } from "../Request";

function Signup() {
    const navigate = useNavigate()
    const parentContext = useContext(GoEarth)
    const initialSignUpData = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
        password: "",
    }
    const [signupData, setSignupData] = useState(initialSignUpData)

    const handleSignup = (event) => {
        event.preventDefault();
        const response = postReq("http://test.com", signupData)
        // var response = authenticateSignUpUser(json);
        // response.then(function (authInfoJSON) {
        //     console.log(authInfoJSON) //console auth-user details
        //     storage.setChromeStorage(
        //         AUTH_USER_API_KEY_NAME,
        //         authInfoJSON,
        //         function () {
        //           setIsLoggedIN(true);
        //         });
        // })
    };
    return (
        //  <Layout>
        <div className="auth-container d-flex vh-100 align-items-center">
            <div className="login-form">
                <form method="post" onSubmit={handleSignup}>
                    {/* <div className="text-center">
                    <img src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" alt="logo" width="180" height="auto" className="logo-img" />
                </div> */}
                    <p className="text-center my-3 modal-title fw-600">Create a account</p>
                    <div className="form-group">
                        <input type="text" name="First Name" className="form-control" placeholder="First Name" required="required" value={signupData.firstName} onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="Last Name" className="form-control" placeholder="Last Name" required="required" value={signupData.lastName} onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="email" name="password" className="form-control" placeholder="Email" required="required" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="Mobile" className="form-control" placeholder="Mobile" required="required" value={signupData.mobile} onChange={(e) => setSignupData({ ...signupData, mobile: e.target.value })} />
                    </div>
                    <div className="d-flex">
                        <div className="form-group mx-1">
                            <input type="text" name="city" className="form-control" placeholder="City" required="required" value={signupData.city} onChange={(e) => setSignupData({ ...signupData, city: e.target.value })} />
                        </div>
                        <div className="form-group mx-1">
                            <input type="text" name="pincode" className="form-control" placeholder="Pincode" required="required" value={signupData.pincode} onChange={(e) => setSignupData({ ...signupData, pincode: e.target.value })} />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="form-group mx-1">
                            <input type="text" name="state" className="form-control" placeholder="State" required="required" value={signupData.state} onChange={(e) => setSignupData({ ...signupData, state: e.target.value })} />
                        </div>
                        <div className="form-group mx-1">
                            <input type="text" name="country" className="form-control" placeholder="Country" required="required" value={signupData.country} onChange={(e) => setSignupData({ ...signupData, country: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="password" name="state" className="form-control" placeholder="Password" required="required" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
                    </div>

                    <button type="submit" className="w-100 btn btn-primary btn-block btn-lg">SIGN UP</button>
                </form>
                <div className="text-center small mt-2">Already have accounts? <a href="/login" className="text-decoration-none fw-bold" >Login</a></div>
            </div>
        </div>

        // </Layout>
    );
}

export default Signup;