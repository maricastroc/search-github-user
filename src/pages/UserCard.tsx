import {useState} from "react";

import {UserDetails} from "../components/UserDetails/UserDetails";

import styles from "./UserCard.module.css";

import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

export function UserCard() {
    let username = useParams();

    const [userData, setUserData] = useState<any>({});

    useEffect(() => {
        fetch(
            `https://api.github.com/users/${username.username}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUserData(data);
            });
    });

    return (
        <div className={styles.user}>
            <div className={styles.userResults}>
                <UserDetails user={userData} />
            </div>
            <NavLink
                to={
                    username.user !== "undefined"
                        ? `/users/${username.user}`
                        : `/`
                }
                title="Index"
            >
                <button>Back To Results</button>
            </NavLink>
        </div>
    );
}
