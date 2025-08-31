import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <div className="card-body">
                    <form>
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="photo-url" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 btn-wide rounded-none">Register</button>
                    </form>
                    <p className="font-semibold text-center">Already have an account ? <Link className="text-red-500" to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
)};

export default Register;