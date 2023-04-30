import { useContext, useState } from "react";
import { GoEarth } from "../utilis";
import Layout from "../components/Layout";
import { putReq } from "../Request";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    // const { title } = props
    const navigate = useNavigate()
    const parentContext = useContext(GoEarth)
    const intialResetPasswordObj = {
        existingpassword: "",
        password: "",

    }
    const [resetPassword, setResetPassword] = useState(intialResetPasswordObj)

    async function handleSubmit(e) {
        e.preventDefault()
        const removeExistingpassword = resetPassword

        delete removeExistingpassword.existingpassword

        removeExistingpassword["email"] = localStorage.getItem('email')

        console.log(localStorage.getItem('email'), "removeExistingpassword");

        try {
            const response = await putReq(
                `http://localhost:8080/reearth/v1/updatePassword`,
                JSON.stringify(resetPassword)
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
    }

    console.log(resetPassword, "resetPassword");
    return (
        // <Layout>
        <div className="auth-container d-flex vh-100 align-items-center justifyc-content-center">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="text-center">
                    </div>
                    <p className="text-center my-3 modal-title">Reset password</p>
                    <div className="form-group">
                        <input type="password" className="form-control" name="existing password" placeholder="Existing password" required="required" value={resetPassword.existingpassword} onChange={(e) => setResetPassword({ ...setResetPassword, existingpassword: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={resetPassword.password} onChange={(e) => setResetPassword({ ...setResetPassword, password: e.target.value })} />
                    </div>
                    <button type="submit" className="w-100 btn btn-primary btn-block btn-lg">Reset password</button>
                    {/* <button className="w-100 my-3 btn btn-primary btn-block btn-lg">SIGN IN WITH G SUITE</button> */}
                </form >
            </div>

        </div>
        // </Layout>

    );
}

export default ResetPassword;