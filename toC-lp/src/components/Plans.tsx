"use client";

import {
    Monitor, HelpCircle, Check, AlertCircle, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";
import styles from "./Plans.module.css";
import SectionCTA from "./SectionCTA";

const faqs = [
    {
        question: "プログラミング未経験でも本当に大丈夫？",
        answer: "大丈夫です！「コードを暗記する」のではなく、「AIに指示を出して書いてもらう」手法を使います。文字入力と検索ができれば参加可能です。"
    },
    {
        question: "1人での参加は不安です...",
        answer: "仲間がいるので安心してください！事業所スタッフの同席もOKですし、Discordにはメンターが常駐しています。"
    },
    {
        question: "途中でお休みしてしまっても大丈夫？",
        answer: "フォロー体制があります。資料共有やチーム連携でカバーできるので、無理のない範囲で参加してください。"
    }
];

export default function Plans() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="plans" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-16 reveal">
                    <span className="section-title-en">Entry Requirements & FAQ</span>
                    <h3 className={styles.title}>参加条件 & よくある質問</h3>
                    <div className="section-line"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Requirements */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <Monitor className={`${styles.cardIconMain} text-sanfrecce-purple`} />
                            <h4 className={styles.cardTitle}>参加条件 (必須環境)</h4>
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>PC: 持ち運び可能なノートパソコン</span>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>OS: Windows 11 (推奨) / Linux歓迎</span>
                                    <p className={styles.itemDesc}>※Macの方は個別にご相談ください</p>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>メモリ: 16GB以上 (推奨)</span>
                                    <p className={styles.itemDesc}>※8GBでも可。不明な場合はお問い合わせください</p>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <Check className="w-5 h-5 text-sanfrecce-gold" />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>その他: Googleアカウント (必須)</span>
                                </div>
                            </li>
                        </ul>
                        <div className="flex gap-4 items-start bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                            <p className="text-slate-300 leading-relaxed">
                                経験やスキルよりも、<span className="text-yellow-400 font-bold">「やってみたい」という元気と好奇心</span>が一番大切です！
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="glass-card p-8 md:p-10 reveal">
                        <div className={styles.cardHeader}>
                            <HelpCircle className={`${styles.cardIconMain} text-sanfrecce-purple`} />
                            <h4 className={styles.cardTitle}>よくある質問</h4>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-slate-700/50 pb-4 last:border-0 last:pb-0"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex justify-between items-center w-full text-left group py-3"
                                    >
                                        <h5 className="font-bold text-white group-hover:text-sanfrecce-gold transition-colors pr-4 text-lg">
                                            Q. {faq.question}
                                        </h5>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-6 h-6 text-slate-400 shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-slate-400 shrink-0" />
                                        )}
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-slate-300 leading-relaxed pl-4 border-l-2 border-sanfrecce-purple/50 bg-slate-800/20 p-3 rounded-r-lg">
                                            A. {faq.answer}
                                        </p>
                                    </div>
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
