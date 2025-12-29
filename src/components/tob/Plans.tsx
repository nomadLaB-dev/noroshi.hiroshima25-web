import {
    HelpCircle, Check, Crown
} from "lucide-react";
import styles from "./Plans.module.css";
import SectionCTA from "@/components/common/SectionCTA";

export default function Plans() {

    return (
        <section id="plans" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Plans</span>
                    <h3 className={styles.title}>参画プラン</h3>
                    <div className="section-line"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Participation Plan */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <Crown className={`${styles.cardIconMain} text-sanfrecce-gold`} />
                            <h4 className={styles.cardTitle}>パートナーシップ協賛</h4>
                        </div>
                        <p className="text-slate-300 mb-8 text-sm leading-relaxed text-center">
                            貴社の課題解決と人材育成をフルサポートする<br />
                            プレミアムプランです。
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <span className={styles.itemTitle}>ハッカソンテーマの設定権</span>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <span className={styles.itemTitle}>社員のチーム参加 (人数無制限)</span>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <span className={styles.itemTitle}>成果物(プロトタイプ)の利用権</span>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <span className={styles.itemTitle}>企業ロゴの掲載 (大)</span>
                            </li>
                        </ul>
                        <div className="mt-8 text-center">
                            <span className="text-sm text-gray-400 block mb-2">協賛費用</span>
                            <span className="text-3xl font-bold text-white">お問い合わせ</span>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <HelpCircle className={`${styles.cardIconMain} text-sanfrecce-purple`} />
                            <h4 className={styles.cardTitle}>企業様向け FAQ</h4>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "どのような企業が対象ですか？",
                                    a: "業種・規模は問いません。DX推進や新規事業開発、社内風土の変革に意欲的な企業様を歓迎します。"
                                },
                                {
                                    q: "社員にプログラミング経験がなくても大丈夫ですか？",
                                    a: "はい、問題ありません。AIを活用したノーコード/ローコード開発が中心ですので、業務知識があれば十分に参加可能です。"
                                },
                                {
                                    q: "成果物の権利はどうなりますか？",
                                    a: "基本的には開発チームに帰属しますが、パートナー協賛企業様がテーマ設定された場合の利用権については、別途契約にて柔軟に定めます。"
                                }
                            ].map((faq, index) => (
                                <div key={index} className="border-b border-slate-700/50 pb-4 last:border-0 last:pb-0">
                                    <h5 className="font-bold text-white mb-2 text-lg">Q. {faq.q}</h5>
                                    <p className="text-slate-300 text-sm leading-relaxed pl-4 border-l-2 border-sanfrecce-purple/50">
                                        A. {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <SectionCTA />
            </div>
        </section>
    );
}
