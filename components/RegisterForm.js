import { useState } from "react"

export default function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (res.ok) {
      setMessage("Registration successful! Please log in.")
      setEmail("")
      setPassword("")
    } else {
      setMessage(data.error || "Registration failed")
    }
  }

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-2 max-w-sm mx-auto">
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
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">
        Register
      </button>
      {message && <p className="text-center mt-2">{message}</p>}
    </form>
  )
}
