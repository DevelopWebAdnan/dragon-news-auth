import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "Name should be 6 characters or longer" });
            return;
        }
        const email = form.get("email");
        const password = form.get("password");
        const photo = form.get("photo");
        console.log({ name, email, password, photo });

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />
                        {
                            error.name && <label className="label text-xs text-rose-500">{error.name}</label>
                        }
                        <label className="label">Photo URL</label>
                        <input type="text" name="photo" className="input" placeholder="photo-url" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 btn-wide rounded-none">Register</button>
                    </form>
                    <p className="font-semibold text-center">Already Have An Account ? <Link className="text-red-500" to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
};

export default Register;