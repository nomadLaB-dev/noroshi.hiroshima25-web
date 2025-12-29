import { FileText, MessageCircle, Laptop, Rocket } from "lucide-react";
import styles from "./Roadmap.module.css";
import SectionCTA from "@/components/common/SectionCTA";

export default function Roadmap() {
    return (
        <section id="roadmap" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Flow</span>
                    <h3 className={styles.title}>導入・参加の流れ</h3>
                    <div className="section-line"></div>
                    <p className="text-slate-300 mt-4">事業所様の状況に合わせて、丁寧に向けたサポートを行います。</p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.centerLine}></div>

                    {/* Step 1 */}
                    <div className={`${styles.row} ${styles.rowLeft} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Step 1</span>
                                <h4 className={styles.stepTitle}>Webエントリー</h4>
                                <p className={styles.stepDesc}>
                                    まずはお問い合わせフォームより、参加希望の旨をご連絡ください。詳細な資料をお送りします。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={`${styles.row} ${styles.rowRight} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Step 2</span>
                                <h4 className={styles.stepTitle}>個別オンライン相談</h4>
                                <p className={styles.stepDesc}>
                                    「うちの利用者さんでも大丈夫？」などの不安を解消。事業所の設備や支援体制に合わせた参加プランをご提案します。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className={`${styles.row} ${styles.rowLeft} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <Laptop className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Step 3</span>
                                <h4 className={styles.stepTitle}>導入ガイダンス & 準備</h4>
                                <p className={styles.stepDesc}>
                                    PC環境の確認や、Discordへの招待を行います。利用者さん向けの事前学習教材も提供します。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className={`${styles.row} ${styles.rowRight} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Step 4</span>
                                <h4 className={styles.stepTitle}>ハッカソン当日</h4>
                                <p className={styles.stepDesc}>
                                    いよいよスタート！期間中はメンターがチャットで常駐サポート。スタッフの方の同席・見学も大歓迎です。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionCTA />
            </div>
        </section>
    );
}
