import { useContext, useState } from "react";
import { GoEarth } from "../utilis";
import Layout from "../components/Layout";

function ResetPassword() {
    const parentContext = useContext(GoEarth)
    const intialResetPasswordObj ={
        // existingpassword : "",
        newpassword:"",
        email: parentContext.userDTO.email
    } 
    const [ resetPassword, setResetPassword ] = useState(intialResetPasswordObj)

    function handleSubmit(e) {
        e.preventDefault()
        
    }
    return ( 
        <Layout>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="text-center">
                    </div>
                    <p className="text-center my-3 modal-title">Reset password</p>
                    <div className="form-group">
                        <input type="password" className="form-control" name="existing password" placeholder="Existing password" required="required" value={resetPassword.existingPassword} onChange={(e) => setResetPassword({ ...setResetPassword, existingPassword: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={resetPassword.newPassword} onChange={(e) => setResetPassword({ ...setResetPassword, newPassword: e.target.value })} />
                    </div>
                    <button type="submit" className="w-100 btn btn-primary btn-block btn-lg">LOGIN</button>
                    {/* <button className="w-100 my-3 btn btn-primary btn-block btn-lg">SIGN IN WITH G SUITE</button> */}
                </form >
            </div>
        </Layout>
        
     );
}

export default ResetPassword;