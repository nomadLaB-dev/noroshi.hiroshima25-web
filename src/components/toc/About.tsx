import styles from "./About.module.css";

import SectionCTA from "@/components/common/SectionCTA";

export default function About() {
    return (
        <section id="about" className={`${styles.section} reveal`}>
            <div className={styles.container}>
                <span className="section-title-en">What&apos;s NOROSHI?</span>
                <h3 className={styles.title}>NOROSHI.HIROSHIMAにようこそ</h3>
                <div className="section-line"></div>
                <p className={styles.descriptionPrimary}>
                    「自分にはスキルなんてない」
                    <br />
                    「毎日同じ作業の繰り返しで、将来が不安」
                    <br />
                    そう思っていませんか？
                </p>
                <p className={styles.descriptionSecondary}>
                    NOROSHI.HIROSHIMAは、広島の就労支援事業所と連携して開催される、障害のある方のための「実践型ハッカソン」です。
                    <br />
                    プログラミングの経験は問いません。使うのは、最新の「AI」。
                    <br />
                    AIという最強のパートナーがいれば、「作りたい」と思ったその日に、アプリを作れる時代が来ました。
                </p>
                <SectionCTA />
            </div>
        </section>
    );
}
