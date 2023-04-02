import {render} from "react-dom";
import styles from "./Card.module.css";

import {NavLink} from "react-router-dom";
export function Card({src, username, user}) {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <div className={styles.userAndImg}>
                    <img src={src} alt="" />
                    <p>{`@${username}`}</p>
                </div>
            </div>
            <form className={styles.features}>
                <button className={styles.profileBtn}>
                    <a
                        target="_blank"
                        href={`https://github.com/${username}`}
                    >
                        View Profile
                    </a>
                </button>
                <NavLink
                    to={`/user/${username}/${user}`}
                    title="User"
                >
                    <button className={styles.infoBtn}>
                        More Info
                    </button>
                </NavLink>
            </form>
        </div>
    );
}
