import { Monitor, HelpCircle, Check, Users } from "lucide-react";
import styles from "./Plans.module.css";
import SectionCTA from "./SectionCTA";

export default function Plans() {
    return (
        <section id="plans" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Requirements & FAQ</span>
                    <h3 className={styles.title}>参加条件 & よくある質問</h3>
                    <div className="section-line"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Requirements */}
                    <div className="glass-card p-8 reveal">
                        <div className="flex items-center gap-4 mb-6">
                            <Monitor className="w-8 h-8 text-sanfrecce-purple" />
                            <h4 className="text-xl font-bold text-white">参加条件 (推奨環境)</h4>
                        </div>
                        <ul className="space-y-4 text-slate-300 mb-8">
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-sanfrecce-gold shrink-0 mt-1" />
                                <div>
                                    <span className="font-bold text-white">PC環境:</span> 事業所様、またはご自身のノートパソコン
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-sanfrecce-gold shrink-0 mt-1" />
                                <div>
                                    <span className="font-bold text-white">通信環境:</span> Wi-Fiへの接続が可能なこと
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-sanfrecce-gold shrink-0 mt-1" />
                                <div>
                                    <span className="font-bold text-white">スタッフ同席:</span> 初回および当日は可能な限り同席を推奨
                                    <p className="text-xs text-slate-400 mt-1">※ 利用者さんのサポートをお願いします</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-sanfrecce-gold shrink-0 mt-1" />
                                <div>
                                    <span className="font-bold text-white">その他:</span> Googleアカウント (必須)
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <div className="glass-card p-8 reveal">
                        <div className="flex items-center gap-4 mb-6">
                            <HelpCircle className="w-8 h-8 text-sanfrecce-purple" />
                            <h4 className="text-xl font-bold text-white">よくある質問</h4>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h5 className="font-bold text-white mb-2">Q. パソコンに不慣れな利用者さんでも大丈夫？</h5>
                                <p className="text-slate-300 text-sm">
                                    A. 文字入力とWeb検索ができれば参加可能です。Discordの使い方などは事前に丁寧にガイダンスを行います。
                                </p>
                            </div>
                            <div>
                                <h5 className="font-bold text-white mb-2">Q. 費用はかかりますか？</h5>
                                <p className="text-slate-300 text-sm">
                                    A. 参加費は無料です。ただし、会場までの交通費や通信費（ご自身の端末を使用する場合）はご負担ください。
                                </p>
                            </div>
                            <div>
                                <h5 className="font-bold text-white mb-2">Q. 1事業所から何名でも参加できますか？</h5>
                                <p className="text-slate-300 text-sm">
                                    A. 基本的には制限はありませんが、応募多数の場合は調整させていただく場合がございます。1名様からのご参加も大歓迎です。
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
