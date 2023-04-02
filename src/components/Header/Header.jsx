import {useState} from "react";
import {NavLink} from "react-router-dom";

import styles from "./Header.module.css";

import {Sun} from "phosphor-react";
import {Moon} from "phosphor-react";

export function Header(props) {
    const [darkMode, setDarkMode] = useState(true);

    function setTheme() {
        props.onClick(!darkMode);
        setDarkMode((darkMode) => !darkMode);
    }

    return (
        <div className={styles.header}>
            <NavLink to="/">
                <strong>devfinder</strong>
            </NavLink>
            <div
                className={styles.theme}
                onClick={setTheme}
            >
                <p>{darkMode ? "light" : "dark"}</p>
                <span
                    className={styles.light}
                    hidden={darkMode ? false : true}
                >
                    <Sun size={20} />
                </span>
                <span
                    className={styles.dark}
                    hidden={darkMode ? true : false}
                >
                    <Moon size={20} />
                </span>
            </div>
        </div>
    );
}
