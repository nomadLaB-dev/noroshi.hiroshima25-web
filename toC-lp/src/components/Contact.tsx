import Link from "next/link";
import styles from "./Contact.module.css";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className="reveal">
                    <span className="section-title-en">Entry</span>
                    <h3 className={styles.title}>エントリーはこちら</h3>
                    <div className="section-line"></div>
                    <p className={styles.description}>
                        あなたの挑戦を待っています！
                        <br />
                        定員は10チーム（約30名）です。定員に達し次第締め切りますのでお早めに！
                    </p>

                    <div className="max-w-xl mx-auto mt-12">
                        <Link
                            href="#" // TODO: 実際のフォームへのリンクを設定
                            className="group relative flex items-center justify-center gap-4 w-full bg-sanfrecce-purple hover:bg-sanfrecce-purple-dark text-white font-bold py-6 px-8 rounded-2xl text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10">応募フォームへ進む</span>
                            <ArrowRight className="w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <p className="text-slate-400 text-sm mt-6 text-center">
                            ※ ご質問がある場合は、運営事務局までお問い合わせください。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
