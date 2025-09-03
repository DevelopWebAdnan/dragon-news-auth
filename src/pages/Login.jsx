import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { logInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                // alert(error.code);
                setError({ ...error, login: err.code });
            });

    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        {
                            error.login &&
                            <label className="label text-xs text-red-700">{error.login}</label>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 btn-wide rounded-none">Login</button>
                    </form>
                    <p className="text-center font-semibold">Do Not Have An Account ? <Link className="text-red-600" to="/auth/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;