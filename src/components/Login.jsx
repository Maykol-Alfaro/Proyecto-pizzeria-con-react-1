import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email.includes("@")) {
            alert("El correo debe incluir un '@'")
            return
        }

        if (password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        }

        alert("Registro exitoso 🚀")
    }

    return (
        <div className="container mt-4" style={{ maxWidth: "400px"}}>
            <h2 className="text-center mb-3">Iniciar sesión</h2>

            <form onSubmit={handleSubmit}>
                {/* Email*/}
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                     type="email"
                     className="form-control"
                     value={email}
                     onChange={(e) => setEmail (e.target.value)} 
                     />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Login