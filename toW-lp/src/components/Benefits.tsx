import { TrendingUp, Users, Megaphone, CheckCircle } from "lucide-react";
import styles from "./Benefits.module.css";
import SectionCTA from "./SectionCTA";

export default function Benefits() {
    return (
        <section id="benefits" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Benefits</span>
                    <h3 className={styles.title}>
                        参加事業所の3つのメリット
                    </h3>
                    <div className="section-line"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Benefit 1 */}
                    <div className="glass-card p-8 reveal flex flex-col items-center text-center">
                        <div className="bg-sanfrecce-purple/20 p-4 rounded-full mb-6">
                            <TrendingUp className="w-12 h-12 text-sanfrecce-gold" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">新しい工賃向上モデル</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            「軽作業」だけが選択肢ではありません。AIを使えば、PC業務などの高単価な案件獲得につながるスキルセットが身につきます。
                        </p>
                        <ul className="text-left w-full space-y-2">
                            <li className="flex gap-2 text-xs text-slate-400">
                                <CheckCircle className="w-4 h-4 text-sanfrecce-purple shrink-0" />
                                <span>PC作業の受注拡大</span>
                            </li>
                            <li className="flex gap-2 text-xs text-slate-400">
                                <CheckCircle className="w-4 h-4 text-sanfrecce-purple shrink-0" />
                                <span>独自商品開発のノウハウ</span>
                            </li>
                        </ul>
                    </div>

                    {/* Benefit 2 */}
                    <div className="glass-card p-8 reveal flex flex-col items-center text-center">
                        <div className="bg-sanfrecce-purple/20 p-4 rounded-full mb-6">
                            <Users className="w-12 h-12 text-sanfrecce-gold" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">利用者さんの才能発掘</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            「できない」と思い込んでいたことが、AIの補助で「できる」に変わる瞬間。その成功体験が、利用者さんの自信と意欲を大きく育てます。
                        </p>
                        <ul className="text-left w-full space-y-2">
                            <li className="flex gap-2 text-xs text-slate-400">
                                <CheckCircle className="w-4 h-4 text-sanfrecce-purple shrink-0" />
                                <span>就労への意欲向上</span>
                            </li>
                            <li className="flex gap-2 text-xs text-slate-400">
                                <CheckCircle className="w-4 h-4 text-sanfrecce-purple shrink-0" />
                                <span>隠れた得意分野の発見</span>
                            </li>
                        </ul>
                    </div>

                    {/* Benefit 3 */}
                    <div className="glass-card p-8 reveal flex flex-col items-center text-center">
                        <div className="bg-sanfrecce-purple/20 p-4 rounded-full mb-6">
                            <Megaphone className="w-12 h-12 text-sanfrecce-gold" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">先進的な事業所としてPR</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            「AIを活用した就労支援」は、まだどこもやっていない最先端の取り組み。メディアや行政からの注目も集まります。
                        </p>
                        <ul className="text-left w-full space-y-2">
                            <li className="flex gap-2 text-xs text-slate-400">
                                <CheckCircle className="w-4 h-4 text-sanfrecce-purple shrink-0" />
                                <span>他の事業所との差別化</span>
                            </li>
                            <li className="flex gap-2 text-xs text-slate-400">
                                <CheckCircle className="w-4 h-4 text-sanfrecce-purple shrink-0" />
                                <span>採用・集客への効果</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <SectionCTA />
            </div>
        </section>
    );
}
