import { Rocket, GraduationCap, Wrench, Trophy } from "lucide-react";
import styles from "./Roadmap.module.css";
import SectionCTA from "@/components/common/SectionCTA";

export default function Roadmap() {
    return (
        <section id="roadmap" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Schedule</span>
                    <h3 className={styles.title}>期間とスケジュール</h3>
                    <div className="section-line"></div>
                    <p className="text-slate-300 mt-4">無理なく成長できるように、ステップを分けて進めます。</p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.centerLine}></div>

                    {/* Start */}
                    <div className={`${styles.row} ${styles.rowLeft} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Start</span>
                                <h4 className={styles.stepTitle}>事前準備（Discord）</h4>
                                <p className={styles.stepDesc}>
                                    エントリー後、Discordにご招待。「AMA」に参加したり、事前資料でPCの準備を整えます。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 1 */}
                    <div className={`${styles.row} ${styles.rowRight} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Step 1</span>
                                <h4 className={styles.stepTitle}>学ぶ（2週間）</h4>
                                <p className={styles.stepDesc}>
                                    AIへの指示出し、Webアプリの仕組み、GitHubを学習。AIと協力して自分のPCでアプリを動かすのがゴール！
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={`${styles.row} ${styles.rowLeft} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <Wrench className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Step 2</span>
                                <h4 className={styles.stepTitle}>作る（2週間）</h4>
                                <p className={styles.stepDesc}>
                                    3人1組でアイデアを形に。世に出せるプロトタイプを完成させます。中間発表でプロからのFBもあり。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className={`${styles.row} ${styles.rowRight} reveal`}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <Trophy className="w-6 h-6 text-white" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.date}>Step 3</span>
                                <h4 className={styles.stepTitle}>磨く＆発表（最終仕上げ）</h4>
                                <p className={styles.stepDesc}>
                                    アドバイスを元にブラッシュアップ！最終日は経営者やゲストの前で完成したアプリをプレゼンします。
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
