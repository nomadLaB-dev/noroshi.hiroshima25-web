import { Trophy, Medal, Lightbulb, Heart, User, Crown, Fish } from "lucide-react";
import styles from "./Benefits.module.css";
import SectionCTA from "@/components/common/SectionCTA";

export default function Benefits() {
    return (
        <section id="benefits" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Prizes</span>
                    <h3 className={styles.title}>
                        開催概要 & 豪華特典
                    </h3>
                    <div className="section-line"></div>
                    <p className={styles.description}>
                        ただ勉強するだけじゃありません。チームで競い合い、評価される場です。
                        <br />
                        <span className="text-sanfrecce-gold font-bold text-2xl mt-4 inline-block">賞金・賞品総額 100,000円</span>
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Team Awards */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <Trophy className={`${styles.cardIconMain} text-sanfrecce-gold`} />
                            <h4 className={styles.cardTitle}>チーム賞</h4>
                        </div>
                        <ul className="space-y-8">
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Crown className="w-8 h-8 text-yellow-400" />
                                </div>
                                <div>
                                    <h5 className={`${styles.itemTitle} text-yellow-400`}>最優秀賞：50,000円 (1チーム)</h5>
                                    <p className={styles.itemDesc}>今大会のNo.1プロダクト。</p>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Medal className="w-8 h-8 text-slate-300" />
                                </div>
                                <div>
                                    <h5 className={`${styles.itemTitle} text-slate-200`}>優秀賞：各10,000円 (2チーム)</h5>
                                    <p className={styles.itemDesc}>最優秀賞に次ぐ、優れたプロダクト。</p>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Lightbulb className="w-8 h-8 text-yellow-200" />
                                </div>
                                <div>
                                    <h5 className={`${styles.itemTitle} text-slate-200`}>アイデア賞：10,000円 (1チーム)</h5>
                                    <p className={styles.itemDesc}>審査員を唸らせたユニークな解決策。</p>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperTeam}`}>
                                    <Heart className="w-8 h-8 text-pink-400" />
                                </div>
                                <div>
                                    <h5 className={`${styles.itemTitle} text-slate-200`}>オーディエンス賞：10,000円 (1チーム)</h5>
                                    <p className={styles.itemDesc}>会場の投票で決定する、一番「心を動かされた」賞。</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Individual Awards */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <User className={`${styles.cardIconMain} text-sanfrecce-purple`} />
                            <h4 className={styles.cardTitle}>個人賞 (Discord貢献賞)</h4>
                        </div>
                        <p className="text-slate-300 mb-8 text-center text-sm leading-relaxed">
                            技術レベルに関係なく、期間中のコミュニケーションで<br className="hidden md:block" />最も輝いていた人に贈られます。
                        </p>
                        <ul className="space-y-8">
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperPersonal}`}>
                                    <User className="w-6 h-6 text-blue-300" />
                                </div>
                                <div>
                                    <h5 className={`${styles.itemTitle} text-blue-200`}>コミュニティ・ヒーロー賞：5,000円 (1名)</h5>
                                    <p className={styles.itemDesc}>困っている仲間に声をかけたり、GIVEをしてくれた人へ。</p>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={`${styles.iconWrapper} ${styles.iconWrapperPersonal}`}>
                                    <Fish className="w-6 h-6 text-cyan-300" />
                                </div>
                                <div>
                                    <h5 className={`${styles.itemTitle} text-cyan-200`}>ファーストペンギン賞：5,000円 (1名)</h5>
                                    <p className={styles.itemDesc}>勇気ある最初の行動で場を盛り上げた人へ。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <SectionCTA />
            </div>
        </section>
    );
}
