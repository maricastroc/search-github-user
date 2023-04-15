import {render} from "react-dom";
import styles from "./Card.module.css";

export interface CardProps {
  key: string,
  src: string,
  username: string,
  user: string | undefined,
}

import {NavLink} from "react-router-dom";
export function Card(props: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <div className={styles.userAndImg}>
                    <img src={props.src} alt="" />
                    <p>{`@${props.username}`}</p>
                </div>
            </div>
            <form className={styles.features}>
                <button className={styles.profileBtn}>
                    <a
                        target="_blank"
                        href={`https://github.com/${props.username}`}
                    >
                        View Profile
                    </a>
                </button>
                <NavLink
                    to={`/user/${props.username}/${props.user}`}
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
