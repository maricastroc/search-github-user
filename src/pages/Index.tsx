import {useState} from "react";
import {useEffect} from "react";

import styles from "./Index.module.css";

import {Card} from "../components/Card/Card";

export function Index() {
    const [usersList, setUsersList] = useState<any[]>([]);

    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsersList(data);
            });
    });

    return (
        <div className={styles.home}>
            {usersList.map((user) => {
                return (
                    <Card
                        key={user.id}
                        src={user.avatar_url}
                        username={user.login}
                        user={user.name}
                    />
                );
            })}
        </div>
    );
}
