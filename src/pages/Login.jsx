import React, { useState } from 'react'

export default function Login({ onLogin, setLanguage }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username && password) onLogin()
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Intelimas</h1>
      <p>Selecciona tu idioma:</p>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <br /><br />
      <input placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}