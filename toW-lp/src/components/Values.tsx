import { Zap, Target } from "lucide-react";
import styles from "./Values.module.css";

export default function Values() {
    return (
        <section id="values" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-20 reveal">
                    <span className="section-title-en">Values of Hackathon</span>
                    <h3 className={styles.title}>
                        ハッカソンが提供する
                        <br className="md:hidden" />
                        2つの本質価値。
                    </h3>
                    <div className="section-line"></div>
                </div>
                <div className={styles.grid}>
                    <div className={`glass-card ${styles.card} ${styles.cardLeft} reveal`}>
                        <div className={styles.iconWrapperPurple}>
                            <Zap className="text-purple-400 w-8 h-8" />
                        </div>
                        <h4 className={styles.cardTitlePurple}>AI駆動開発の真髄を体感</h4>
                        <p className={styles.cardDescription}>
                            AIを単なるチャットツールとしてではなく、「開発エンジニア」としてディレクション。個々人が自らの課題を爆速で解決していくプロセスは、貴社のDX戦略に圧倒的なヒントを与えます。
                        </p>
                    </div>
                    <div className={`glass-card ${styles.card} ${styles.cardGold} reveal`}>
                        <div className={styles.iconWrapperGold}>
                            <Target className="text-yellow-500 w-8 h-8" />
                        </div>
                        <h4 className={styles.cardTitleGold}>タレント発掘と新規事業の種</h4>
                        <p className={styles.cardDescription}>
                            自らの「不便」を解決するために立ち上がったチャレンジャーたち。彼らの生み出すプロダクトは、そのまま貴社の新規事業の種や、内製化のパートナー候補となります。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
