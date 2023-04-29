import { Navigate } from "react-router-dom";
import { postReq, putReg } from "../Request";
import { useContext, useEffect, useState } from "react";
import { GoEarth } from "../utilis";

function EditUserDetails() {
  const parentContext = useContext(GoEarth);
  const initialSignUpData = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    mobilenumber: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    password: "",
  };
  const [signupData, setSignupData] = useState(initialSignUpData);

  useEffect(() => {
const response = 
    setSignupData({ ...parentContext.userDTO });
  }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await putReg(
        "http://localhost:8080/reearth/v1/update",
        signupData
      );
      console.log(response.data, "response.data");
      parentContext.setUserDTO({ ...response.data.result });
      parentContext.setShowSuccessMessage(response.data.message);
      parentContext.setIsLoading(true);
      setTimeout(() => {
        parentContext.setIsLoading(false);
        parentContext.setShowSuccessMessage("");
        Navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err, "err");
      parentContext.setErrorMessage(err.response.data.message);
       setTimeout(() => {
         parentContext.setErrorMessage(err.response.data.message);
       }, 2000);
    }
  };

  console.log(parentContext.userDTO, "signupData");
  return (
    <div className="auth-container d-flex vh-100 align-items-center">
      <div className="login-form">
        <form method="post" onSubmit={handleSignup}>
          {/* <div className="text-center">
                    <img src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" alt="logo" width="180" height="auto" className="logo-img" />
                </div> */}
          <p className="text-center my-3 modal-title fw-600">
            Create a account
          </p>
          <div className="form-group">
            <input
              type="text"
              name="First Name"
              className="form-control"
              placeholder="First Name"
              required="required"
              value={signupData.firstname}
              onChange={(e) =>
                setSignupData({ ...signupData, firstname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Last Name"
              className="form-control"
              placeholder="Last Name"
              required="required"
              value={signupData.lastname}
              onChange={(e) =>
                setSignupData({ ...signupData, lastname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="User Name"
              className="form-control"
              placeholder="User Name"
              required="required"
              value={signupData.username}
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="password"
              className="form-control"
              placeholder="Email"
              required="required"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Mobile"
              className="form-control"
              placeholder="Mobile"
              required="required"
              value={signupData.mobilenumber}
              onChange={(e) =>
                setSignupData({ ...signupData, mobilenumber: e.target.value })
              }
            />
          </div>
          <div className="d-flex">
            <div className="form-group mx-1">
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="City"
                required="required"
                value={signupData.city}
                onChange={(e) =>
                  setSignupData({ ...signupData, city: e.target.value })
                }
              />
            </div>
            <div className="form-group mx-1">
              <input
                type="text"
                name="pincode"
                className="form-control"
                placeholder="Pincode"
                required="required"
                value={signupData.pincode}
                onChange={(e) =>
                  setSignupData({ ...signupData, pincode: e.target.value })
                }
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group mx-1">
              <input
                type="text"
                name="state"
                className="form-control"
                placeholder="State"
                required="required"
                value={signupData.state}
                onChange={(e) =>
                  setSignupData({ ...signupData, state: e.target.value })
                }
              />
            </div>
            <div className="form-group mx-1">
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Country"
                required="required"
                value={signupData.country}
                onChange={(e) =>
                  setSignupData({ ...signupData, country: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="state"
              className="form-control"
              placeholder="Password"
              required="required"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-100 btn btn-primary btn-block btn-lg"
          >
            SIGN UP
          </button>
        </form>
        <div className="text-center small mt-2">
          Already have accounts?{" "}
          <a href="/login" className="text-decoration-none fw-bold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default EditUserDetails;
