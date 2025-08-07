import React, { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [language, setLanguage] = useState('es')

  return isLoggedIn ? (
    <Dashboard language={language} />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} setLanguage={setLanguage} />
  )
}