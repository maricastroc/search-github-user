import styles from "./Error.module.css";

export function Error() {
    return (
        <div>
            <p className={styles.error}>No results!</p>
        </div>
    );
}
