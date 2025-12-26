import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={`hero-bg-anim ${styles.bgAnim}`}></div>
            <div className={styles.bgGradient1}></div>
            <div className={styles.bgGradient2}></div>

            <div className={`${styles.content} reveal active`}>
                <p className={`${styles.subtitle} float-anim`}>NOROSHI.HIROSHIMA</p>
                <h2 className={styles.title}>
                    <span className="text-sanfrecce-gradient">
                        君の「可能性」に
                        <br className={styles.brMobile} />
                        火をつけろ。
                    </span>
                </h2>
                <p className={styles.description}>
                    「自分にはスキルなんてない」そう思っていませんか？
                    <br />
                    AIという最強のパートナーがいれば、「作りたい」と思ったその日にアプリを作れる時代です。
                    <br />
                    あなたの「困った」を「解決」に変える。世界に一つだけのアプリを、一緒に作りませんか？
                </p>
                <div className={styles.actions}>
                    <a href="#plans" className={styles.ctaButton}>
                        エントリーする
                    </a>
                </div>
            </div>
        </section>
    );
}
