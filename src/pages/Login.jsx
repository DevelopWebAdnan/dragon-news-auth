import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <div className="card-body">
                    <form>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
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