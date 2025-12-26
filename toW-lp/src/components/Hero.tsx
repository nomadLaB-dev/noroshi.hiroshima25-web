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
                        AI駆動開発
                        <br className={styles.brMobile} />
                        ハッカソン
                    </span>
                </h2>
                <p className={styles.taglineWrapper}>
                    <span className={styles.taglineMain}>「想像」を「創造」へ</span>
                </p>
                <p className={styles.description}>
                    最新の生成AIを武器に、個人の想いをわずか2週間でプロダクトへ。
                    <br />
                    従来のスピードを凌駕する「AIディレクション」が、広島の現場をアップデートします。
                </p>
                <div className={styles.actions}>
                    <a href="#plans" className={styles.ctaButton}>
                        事業所エントリー
                    </a>
                </div>
            </div>
        </section>
    );
}
