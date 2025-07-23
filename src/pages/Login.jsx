import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../components/Authentication"

export default function Login() {
    const [email, setEmail] = UseState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState("")
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(email, password );
        if (success){
            navigate("/games"); //check on this later
        } else {
            setError("Invalid email or password");
        }

    };

    return (
        <div className="login-container">
            <h2>Login to IndieGamesApp⚔️</h2> 
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                />

                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />

                {error && <p style={{color:"red"}}>{error}</p>}

                <button type="submit">Login</button>
            </form>  
        </div>
    )
}