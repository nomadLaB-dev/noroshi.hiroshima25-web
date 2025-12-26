import styles from "./About.module.css";
import SectionCTA from "./SectionCTA";

export default function About() {
    return (
        <section id="about" className={`${styles.section} reveal`}>
            <div className={styles.container}>
                <span className="section-title-en">What&apos;s NOROSHI.jp</span>
                <h3 className={styles.title}>福祉を「挑戦」の最前線へ。</h3>
                <div className="section-line"></div>
                <p className={styles.descriptionPrimary}>
                    「障害者には簡単な作業を」「ITなんて難しいことは無理」
                    <br />
                    世の中に蔓延るそんな「舐められた常識」に、私たちは技術でNOを突きつけます。
                </p>
                <p className={styles.descriptionSecondary}>
                    NOROSHIプロジェクトは、福祉事業所や障害当事者が集い、AIという最強のパートナーを手に、自らの手で「不便」を解決するプロダクトを創り上げる舞台です。
                    <br />
                    これは生存証明であり、誇り高き生存競争（ビジネス）への宣戦布告です。
                </p>
                <div className="mt-8">
                    <SectionCTA />
                </div>
            </div>
        </section>
    );
}
