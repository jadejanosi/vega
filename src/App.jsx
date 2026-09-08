import { useState } from 'react'
import AuthScreen from './components/AuthScreen.jsx'
import AppShell from './components/AppShell.jsx'

export default function App() {
  const [user, setUser] = useState(null)

  return user
    ? <AppShell user={user} onLogout={() => setUser(null)} />
    : <AuthScreen onLogin={setUser} />
}
