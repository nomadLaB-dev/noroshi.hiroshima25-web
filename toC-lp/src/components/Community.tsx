import { MessageCircle, Mic, BookOpen } from "lucide-react";
import styles from "./Community.module.css";
import SectionCTA from "./SectionCTA";

export default function Community() {
    return (
        <section id="community" className={styles.section}>
            <div className={`${styles.header} reveal`}>
                <span className="section-title-en">Support System</span>
                <h3 className={styles.title}>
                    未経験でも安心！
                    <br className="md:hidden" />
                    3つの「絶対挫折させない」サポート
                </h3>
                <div className="section-line"></div>
                <p className="text-slate-300 mt-4">「本当に私でもできるの？」という不安を解消するために、万全の環境を用意しました。</p>
            </div>
            <div className={styles.grid}>
                {/* Support 1 */}
                <div className={`glass-card ${styles.card} reveal`}>
                    <div className="flex justify-center mb-6">
                        <MessageCircle className="w-16 h-16 text-sanfrecce-purple" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-center text-white">
                        24時間いつでも相談できる<br />「Discordコミュニティ」
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        参加者限定のチャットツールを用意。「エラーが出た！助けて！」と書き込めば、エンジニアやAIが得意なスタッフが駆けつけます。
                    </p>
                </div>

                {/* Support 2 */}
                <div className={`glass-card ${styles.card} reveal`}>
                    <div className="flex justify-center mb-6">
                        <Mic className="w-16 h-16 text-sanfrecce-purple" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-center text-white">
                        事前お悩み相談会<br />「AMA」開催
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        「PCの準備ができない…」「どんな雰囲気？」など、イベント開始前から音声やチャットで気軽に相談できます。
                    </p>
                </div>

                {/* Support 3 */}
                <div className={`glass-card ${styles.card} reveal`}>
                    <div className="flex justify-center mb-6">
                        <BookOpen className="w-16 h-16 text-sanfrecce-purple" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-center text-white">
                        「Day 0」ガイドの配布
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        難しい環境構築も心配無用。「これさえやれば準備OK！」というわかりやすい手順書を配布します。
                    </p>
                </div>
            </div>
            <div className="mt-12 px-4">
                <SectionCTA />
            </div>
        </section>
    );
}
