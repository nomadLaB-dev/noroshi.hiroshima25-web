import { Zap, TrendingUp, HeartHandshake } from "lucide-react";
import styles from "./AiDriven.module.css";
import SectionCTA from "./SectionCTA";

export default function AiDriven() {
    return (
        <section className={styles.section}>
            <div className={styles.bgGradient}></div>
            <div className={styles.container}>
                <div className="text-center reveal">
                    <span className="section-title-en">Empower with AI</span>
                    <h3 className={styles.title}>なぜ、今「AI」なのか？</h3>
                    <div className="section-line"></div>
                    <p className="text-slate-300 max-w-2xl mx-auto mt-6">
                        単純作業の繰り返しから、創造的な価値を生む仕事へ。
                        <br />
                        AIは、障害のある方々の「得意」を伸ばし、「苦手」をカバーする最強のツールになります。
                    </p>
                </div>

                <div className={`${styles.content} reveal mt-12`}>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 flex flex-col items-center text-center">
                            <div className="bg-purple-900/30 p-4 rounded-full mb-6">
                                <Zap className="w-10 h-10 text-yellow-400" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-4">スキルの壁を超える</h4>
                            <p className="text-slate-300 text-sm">
                                プログラミングの専門知識がなくても、AIに指示を出す「言語化能力」があればアプリは作れます。
                            </p>
                        </div>
                        <div className="glass-card p-8 flex flex-col items-center text-center">
                            <div className="bg-purple-900/30 p-4 rounded-full mb-6">
                                <TrendingUp className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-4">工賃向上の新モデル</h4>
                            <p className="text-slate-300 text-sm">
                                「下請け作業」だけでなく、自らプロダクトを生み出し販売する。高い付加価値による収益化を目指せます。
                            </p>
                        </div>
                        <div className="glass-card p-8 flex flex-col items-center text-center">
                            <div className="bg-purple-900/30 p-4 rounded-full mb-6">
                                <HeartHandshake className="w-10 h-10 text-pink-400" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-4">支援の質が変わる</h4>
                            <p className="text-slate-300 text-sm">
                                スタッフは「教える人」から「伴走する人」へ。利用者さんと共に学び、共に成長する新しい関係性が生まれます。
                            </p>
                        </div>
                    </div>
                </div>
                <SectionCTA />
            </div>
        </section>
    );
}
