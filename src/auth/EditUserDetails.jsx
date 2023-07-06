// import { Navigate } from "react-router-dom";
import { getReq, putReq } from "../Request";
import { useContext, useEffect, useState } from "react";
import { GoEarth } from "../utilis";
import { useNavigate } from "react-router-dom";

function EditUserDetails() {
  const parentContext = useContext(GoEarth);
  const navigate = useNavigate()
  const initialupdateData = {
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
  const [updateData, setUpdateData] = useState(initialupdateData);
  async function fetchData() {
    // You can await here
    try {
      const response = await getReq(
        `http://localhost:8080/reearth/v1/getUserDetails?emailid=${localStorage.getItem(
          "email"
        )}`
      );
      console.log(response, "response");
      const addCountry = response.data.result;
      addCountry["country"] = "india";
      setUpdateData({ ...addCountry });
    } catch (err) {
      console.log(err, "err");
    }

    // ...
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await putReq(
        "http://localhost:8080/reearth/v1/update",
        updateData
      );
      console.log(response.data, "response.data");
      parentContext.setUserDTO({ ...response.data.result });
      parentContext.setShowSuccessMessage(response.data.message);
      parentContext.setIsLoading(true);
      setTimeout(() => {
        parentContext.setIsLoading(false);
        parentContext.setShowSuccessMessage("");
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err, "err");
      parentContext.setErrorMessage(err.response.data.message);
      setTimeout(() => {
        parentContext.setErrorMessage(err.response.data.message);
      }, 2000);
    }
  };

  console.log(parentContext.userDTO, "updateData");
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
              value={updateData.firstname}
              onChange={(e) =>
                setUpdateData({ ...updateData, firstname: e.target.value })
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
              value={updateData.lastname}
              onChange={(e) =>
                setUpdateData({ ...updateData, lastname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="User Name"
              className="form-control"
              placeholder="User Name"
              disabled
              required="required"
              value={updateData.username}
              onChange={(e) =>
                setUpdateData({ ...updateData, username: e.target.value })
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
              disabled
              value={updateData.email}
              onChange={(e) =>
                setUpdateData({ ...updateData, email: e.target.value })
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
              value={updateData.mobilenumber}
              onChange={(e) =>
                setUpdateData({ ...updateData, mobilenumber: e.target.value })
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
                value={updateData.city}
                onChange={(e) =>
                  setUpdateData({ ...updateData, city: e.target.value })
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
                value={updateData.pincode}
                onChange={(e) =>
                  setUpdateData({ ...updateData, pincode: e.target.value })
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
                value={updateData.state}
                onChange={(e) =>
                  setUpdateData({ ...updateData, state: e.target.value })
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
                value={updateData.country}
                onChange={(e) =>
                  setUpdateData({ ...updateData, country: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-100 btn btn-primary btn-block btn-lg"
          >
            Update data
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUserDetails;
