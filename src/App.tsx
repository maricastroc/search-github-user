import { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import styles from './App.module.css'

import './global.css'
import { Header } from './components/Header/Header'

export function App() {
  const [darkMode, setMode] = useState(true)

  function setDarkMode(darkMode: boolean) {
    darkMode ? setMode(true) : setMode(false)
  }

  return (
    <div
      className={`${styles.app} ${
        darkMode ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <div className={styles.appContainer}>
        <BrowserRouter>
          <Header onClick={setDarkMode} />
          <Router />
        </BrowserRouter>
      </div>
    </div>
  )
}
