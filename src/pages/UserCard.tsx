import { useState, useEffect } from 'react'

import { UserDetails, userProps } from '../components/UserDetails/UserDetails'

import styles from './UserCard.module.css'

import { useParams, NavLink } from 'react-router-dom'

export function UserCard() {
  const username = useParams()

  const [userData, setUserData] = useState<userProps | undefined>()

  useEffect(() => {
    fetch(`https://api.github.com/users/${username.username}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setUserData(data)
      })
  })

  return (
    <div className={styles.user}>
      <div className={styles.userResults}>
        <UserDetails user={userData} />
      </div>
      <NavLink
        to={username.user !== 'undefined' ? `/users/${username.user}` : `/`}
        title="Index"
      >
        <button>Back To Results</button>
      </NavLink>
    </div>
  )
}
