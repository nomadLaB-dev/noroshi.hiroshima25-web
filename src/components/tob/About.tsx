import styles from "./About.module.css";

import SectionCTA from "@/components/common/SectionCTA";

export default function About() {
    return (
        <section id="about" className={`${styles.section} reveal`}>
            <div className={styles.container}>
                <span className="section-title-en">What&apos;s NOROSHI?</span>
                <h3 className={styles.title}>ビジネスの未来を、共に創る</h3>
                <div className="section-line"></div>
                <p className={styles.descriptionPrimary}>
                    「社内のDXが進まない」
                    <br />
                    「AIを活用できる人材が不足している」
                    <br />
                    そんな経営課題をお持ちではありませんか？
                </p>
                <p className={styles.descriptionSecondary}>
                    NOROSHI.HIROSHIMAは、実践的な開発を通じて、貴社の課題解決と人材育成を同時に実現するプログラムです。
                    <br />
                    最新のAI技術を活用し、わずかな期間でプロトタイプを開発。
                    <br />
                    「机上の空論」ではなく「動くプロダクト」で、ビジネスを加速させる新たな一手をご提案します。
                </p>
                <SectionCTA />
            </div>
        </section>
    );
}
