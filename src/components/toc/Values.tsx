import { Terminal, Users, Palette } from "lucide-react";
import styles from "./Values.module.css";
import SectionCTA from "@/components/common/SectionCTA";

export default function Values() {
    return (
        <section id="values" className={styles.section}>
            <div className={styles.container}>
                <div className="text-center mb-20 reveal">
                    <span className="section-title-en">Team Roles</span>
                    <h3 className={styles.title}>
                        なぜ「3人1組」なの？
                        <br className="md:hidden" />
                        目指せ、最強のトライアングル！
                    </h3>
                    <div className="section-line"></div>
                    <p className="text-slate-300 max-w-2xl mx-auto mt-6">
                        スタートアップ成功の黄金法則「ハッカー・ハスラー・ヒップスター」。
                        <br />
                        全く違う強みを持った3人が集まることで、チームは最強になります。
                    </p>
                </div>
                <div className={styles.grid}>
                    {/* Hacker */}
                    <div className={`glass-card ${styles.card} reveal`}>
                        <div className="bg-purple-900/30 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Terminal className="text-purple-400 w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2 text-center text-purple-200">Hacker<br /><span className="text-sm font-normal text-slate-400">（作る人）</span></h4>
                        <p className="text-sm text-center mb-4 font-bold text-slate-300">AIという最強の相棒を使いこなす司令塔</p>
                        <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside text-left">
                            <li>パズルや組み立て作業が好き</li>
                            <li>実験や試行錯誤が好き</li>
                            <li>コツコツ作業に没頭できる</li>
                        </ul>
                    </div>

                    {/* Hustler */}
                    <div className={`glass-card ${styles.card} reveal`}>
                        <div className="bg-yellow-900/30 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Users className="text-yellow-500 w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2 text-center text-yellow-200">Hustler<br /><span className="text-sm font-normal text-slate-400">（まとめる・伝える人）</span></h4>
                        <p className="text-sm text-center mb-4 font-bold text-slate-300">チームの熱意を言葉にして巻き込むリーダー</p>
                        <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside text-left">
                            <li>人と話す・文章を書くのが好き</li>
                            <li>誰かの役に立ちたい</li>
                            <li>困っている人に声をかけられる</li>
                        </ul>
                    </div>

                    {/* Hipster */}
                    <div className={`glass-card ${styles.card} reveal`}>
                        <div className="bg-pink-900/30 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Palette className="text-pink-400 w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2 text-center text-pink-200">Hipster<br /><span className="text-sm font-normal text-slate-400">（魅せる人）</span></h4>
                        <p className="text-sm text-center mb-4 font-bold text-slate-300">使いやすさとカッコよさを追求するデザイナー</p>
                        <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside text-left">
                            <li>絵を描く・きれいなものが好き</li>
                            <li>「使いにくい」に気づける</li>
                            <li>相手の気持ちになって考える</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 text-center reveal">
                    <p className="text-lg text-slate-300">
                        一人で全部できなくてもいい。
                        <br />
                        凸凹な3人が集まるからこそ、チームになれるんです。
                    </p>
                </div>
                <SectionCTA />
            </div >
        </section >
    );
}
