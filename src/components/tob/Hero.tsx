import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={`hero-bg-anim ${styles.bgAnim}`}></div>
            <div className={styles.bgGradient1}></div>
            <div className={styles.bgGradient2}></div>

            <div className={`${styles.content} reveal active`}>
                <p className={`${styles.subtitle} float-anim`}>NOROSHI.HIROSHIMA for BUSINESS</p>
                <h2 className={styles.title}>
                    <span className="text-sanfrecce-gradient">
                        「組織」の可能性に
                        <br className={styles.brMobile} />
                        火をつけろ。
                    </span>
                </h2>
                <p className={styles.description}>
                    社内のDX、AI人材の不足にお悩みではありませんか？
                    <br />
                    AIという最強のパートナーと共に、組織の課題を「自ら解決できる」人材を育成します。
                    <br />
                    広島から世界へ。次世代のビジネスを牽引するイノベーションを、ここから始めましょう。
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
