import {useState} from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="text-center">
            <h2> Login </h2>
            <hr/>

        </div>

    )
}

export default Login;
