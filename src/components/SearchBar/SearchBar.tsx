import { ChangeEvent, InvalidEvent, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import styles from './SearchBar.module.css'
import { NavLink } from 'react-router-dom'

export function SearchBar() {
  const [inputText, setInputText] = useState('')

  function handleSetInputText(ev: ChangeEvent<HTMLInputElement>) {
    ev.target.setCustomValidity('')
    setInputText(ev.target.value)
  }

  function handleNewUserInvalid(ev: InvalidEvent<HTMLInputElement>) {
    ev.target.setCustomValidity('This field is required!')
  }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBar}>
        <div className={styles.searchInfo}>
          <MagnifyingGlass size={24} />
          <input
            type="text"
            placeholder="Search user..."
            onChange={handleSetInputText}
            onInvalid={handleNewUserInvalid}
            value={inputText}
            spellCheck={false}
            required
          />
        </div>
        <NavLink to={`/users/${inputText}`}>
          <button>Search</button>
        </NavLink>
      </form>
    </div>
  )
}
