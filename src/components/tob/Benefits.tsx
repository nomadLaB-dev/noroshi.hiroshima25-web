import { Trophy, Medal, Lightbulb, Heart, User, Crown, Fish } from "lucide-react";
import styles from "./Benefits.module.css";
import SectionCTA from "@/components/common/SectionCTA";

export default function Benefits() {
    return (
        <section id="benefits" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Benefits</span>
                    <h3 className={styles.title}>
                        企業参画のメリット
                    </h3>
                    <div className="section-line"></div>
                    <p className={styles.description}>
                        単なるイベント協賛ではありません。<br className="hidden md:block" />
                        貴社のビジネスを加速させる、3つの価値を提供します。
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Talent & Recruitment */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <User className={`${styles.cardIconMain} text-sanfrecce-purple`} />
                            <h4 className={styles.cardTitle}>人材発掘・採用</h4>
                        </div>
                        <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                            高い意欲と学習能力を持つ参加者と直接交流。<br />
                            AIを活用して課題解決に取り組む姿勢を、実際の開発プロセスを通じて評価できます。
                        </p>
                        <ul className="space-y-4">
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperPersonal}`}>
                                    <User className="w-5 h-5 text-blue-300" />
                                </div>
                                <h5 className={`${styles.itemTitle} text-blue-200 text-sm`}>即戦力候補との出会い</h5>
                            </li>
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperPersonal}`}>
                                    <Crown className="w-5 h-5 text-cyan-300" />
                                </div>
                                <h5 className={`${styles.itemTitle} text-cyan-200 text-sm`}>多様な視点を持つ人材の確保</h5>
                            </li>
                        </ul>
                    </div>

                    {/* Innovation & DX */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <Lightbulb className={`${styles.cardIconMain} text-sanfrecce-gold`} />
                            <h4 className={styles.cardTitle}>イノベーション創出</h4>
                        </div>
                        <p className="text-slate-300 mb-6 text-center md:text-left text-sm leading-relaxed">
                            貴社の課題をハッカソンのテーマとして設定可能。<br />
                            外部の柔軟な発想とAIの力で、既存の枠にとらわれない解決策（プロトタイプ）が得られます。
                        </p>
                        <ul className="space-y-4">
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Lightbulb className="w-5 h-5 text-yellow-300" />
                                </div>
                                <h5 className={`${styles.itemTitle} text-yellow-200 text-sm`}>新規事業の種（シード）発見</h5>
                            </li>
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Medal className="w-5 h-5 text-orange-300" />
                                </div>
                                <h5 className={`${styles.itemTitle} text-orange-200 text-sm`}>社内DXの加速と啓蒙</h5>
                            </li>
                        </ul>
                    </div>

                    {/* CSR & Branding */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <Heart className={`${styles.cardIconMain} text-pink-500`} />
                            <h4 className={styles.cardTitle}>CSR・ブランディング</h4>
                        </div>
                        <p className="text-slate-300 mb-6 text-center md:text-left text-sm leading-relaxed">
                            「広島」「AI」「障害者就労支援」という社会的意義の高い取り組みへの参画を通じて、<br className="hidden md:block" />
                            企業の社会的責任を果たし、ブランド価値を向上させます。
                        </p>
                        <ul className="space-y-4">
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Heart className="w-5 h-5 text-pink-300" />
                                </div>
                                <h5 className={`${styles.itemTitle} text-pink-200 text-sm`}>SDGs / 多様性推進への貢献</h5>
                            </li>
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Trophy className="w-5 h-5 text-red-300" />
                                </div>
                                <h5 className={`${styles.itemTitle} text-red-200 text-sm`}>先進的な企業イメージの構築</h5>
                            </li>
                        </ul>
                    </div>

                </div>
                <SectionCTA />
            </div>
        </section>
    );
}
