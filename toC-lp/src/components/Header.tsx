import styles from "./Header.module.css";

export default function Header() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <h1 className={styles.logo}>NOROSHI.HIROSHIMA</h1>
                <span className={`${styles.badge} executive-badge`}>
                    Builders & Creators
                </span>
            </div>
        </nav>
    );
}
