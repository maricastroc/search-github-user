import styles from './UserDetails.module.css'

import { MapPin, Browser, TwitterLogo, Buildings } from 'phosphor-react'

export interface userProps {
  created_at: Date
  avatar_url: string
  company: string
  name: string
  login: string
  bio: string
  public_repos: number
  following: number
  followers: number
  twitter_username: string
  location: string
  blog: string
}

interface UserDetailsProps {
  user: userProps | undefined
}

export function UserDetails(props: UserDetailsProps) {
  function convertDate(datetime: Date) {
    const date = new Date(datetime)
    const day = date.getDate()
    const month = date.toLocaleString('default', {
      month: 'short',
    })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  function displayCompany(company: string) {
    if (!company) {
      return <p>Not Available</p>
    } else if (company.includes('@')) {
      return (
        <a
          href={`https://github.com/${company.slice(1)}`}
          target="_blank"
          rel="noreferrer"
        >
          {company}
        </a>
      )
    } else {
      return <p>{company}</p>
    }
  }

  const joinDate = convertDate(props.user?.created_at!)

  return (
    <div className={styles.userDetails}>
      <header>
        <div className={styles.headerImg}>
          <img src={props.user?.avatar_url} alt={props.user?.name} />
        </div>
        <div className={styles.headerName}>
          <div className={styles.userName}>
            <h1>{props.user?.name ? props.user?.name : props.user?.login}</h1>
            <a
              href={`https://github.com/${props.user?.login}`}
              target="_blank"
              rel="noreferrer"
            >
              @{props.user?.login}
            </a>
          </div>
          <p>Joined {joinDate}</p>
        </div>
      </header>
      <main>
        <div className={styles.userBio}>
          {props.user?.bio ? props.user?.bio : 'This profile has no bio.'}
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userInfoItem}>
            <p>Repos</p>
            <strong>{props.user?.public_repos}</strong>
          </div>
          <div className={styles.userInfoItem}>
            <p>Followers</p>
            <strong>{props.user?.followers}</strong>
          </div>
          <div className={styles.userInfoItem}>
            <p>Following</p>
            <strong>{props.user?.following}</strong>
          </div>
        </div>
      </main>
      <footer>
        <section className={styles.otherInfo}>
          <div
            className={
              !props.user?.location
                ? styles.infoNotAvailable
                : styles.otherInfoItem
            }
          >
            <MapPin size={24} />
            <p>
              {!props.user?.location ? 'Not Available' : props.user?.location}
            </p>
          </div>
          <div
            className={
              !props.user?.blog ? styles.infoNotAvailable : styles.otherInfoItem
            }
          >
            <Browser size={24} />
            {!props.user?.blog ? (
              <p>Not Available</p>
            ) : (
              <a href={props.user.blog} target="_blank" rel="noreferrer">
                {props.user.blog}
              </a>
            )}
          </div>
          <div
            className={
              !props.user?.twitter_username
                ? styles.infoNotAvailable
                : styles.otherInfoItem
            }
          >
            <TwitterLogo size={24} />
            {!props.user?.twitter_username ? (
              <p>Not Available</p>
            ) : (
              <a
                href={`https://twitter.com/${props.user.twitter_username}`}
                target="_blank"
                rel="noreferrer"
              >
                {props.user.twitter_username}
              </a>
            )}
          </div>
          <div className={styles.otherInfoItem}>
            <Buildings size={24} />
            {props.user?.company ? (
              <p>{displayCompany(props.user!.company)}</p>
            ) : (
              <p>Not Available</p>
            )}
          </div>
        </section>
      </footer>
    </div>
  )
}
