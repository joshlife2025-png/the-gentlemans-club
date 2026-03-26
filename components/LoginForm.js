import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (res.ok) {
      localStorage.setItem("token", data.token)
      setMessage("Login successful!")
      setEmail("")
      setPassword("")
    } else {
      setMessage(data.error || "Login failed")
    }
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <button type="submit" className="p-2 bg-green-600 text-white rounded">
        Login
      </button>
      {message && <p className="text-center mt-2">{message}</p>}
    </form>
  )
}
Step 3 — Add Forms to a Page
For example, create:

/pages/auth.js
import RegisterForm from "../components/RegisterForm"
import LoginForm from "../components/LoginForm"

export default function AuthPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl text-center font-bold">Register / Login</h1>
      <RegisterForm />
      <LoginForm />
    </div>
  )
}
