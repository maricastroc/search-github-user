import {useState} from "react";

import {Card} from "../components/Card/Card";
import {Error} from "../components/Error/Error";

import styles from "./SearchUsers.module.css";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

export function SearchUsers() {
    const {name} = useParams();

    const [hideError, setHideError] = useState(true);

    const [usersList, setUsersList] = useState([]);
    const [totalCountUsers, setTotalCountUsers] =
        useState("");

    useEffect(() => {
        fetch(
            `https://api.github.com/search/users?q=${name}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.total_count !== 0) {
                    setUsersList(data.items);
                    setTotalCountUsers(data.total_count);
                    setHideError(true);
                } else {
                    setHideError(false);
                }
            });
    }, [name]);

    return (
        <div className={styles.home}>
            <div hidden={hideError}>
                <Error />
            </div>
            <div className={styles.usersCount}>
                <p>
                    <span>
                        {totalCountUsers
                            ? totalCountUsers
                            : 0}
                    </span>{" "}
                    users found /{" "}
                    <span>{usersList.length}</span> users
                    displayed
                </p>
            </div>
            <div className={styles.usersResult}>
                {usersList.map((user) => {
                    return (
                        <Card
                            key={user.id}
                            src={user.avatar_url}
                            username={user.login}
                            user={name}
                        />
                    );
                })}
            </div>
        </div>
    );
}
