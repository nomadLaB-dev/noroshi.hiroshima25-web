import styles from "./AiDriven.module.css";
import { CheckCircle } from "lucide-react";
import SectionCTA from "@/components/common/SectionCTA";

export default function AiDriven() {
    return (
        <section className={styles.section}>
            <div className={styles.bgGradient}></div>
            <div className={styles.container}>
                <div className="text-center reveal">
                    <span className="section-title-en">Target Audience</span>
                    <h3 className={styles.title}>こんな人に来てほしい！</h3>
                    <div className="section-line"></div>
                </div>

                <div className={`${styles.content} reveal`}>
                    <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
                        <ul className="space-y-6">
                            {[
                                "就労継続支援B型・A型 を利用中の方",
                                "就労移行支援・自立訓練 を利用中の方",
                                "または、上記のようなサービスを探している（利用予定の）方",
                                "「現状を変えたい」「スキルを身に着けて稼ぎたい」 という熱い想いがある方"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 text-lg md:text-xl font-bold text-slate-200">
                                    <CheckCircle className="w-8 h-8 text-sanfrecce-gold shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <SectionCTA />
            </div>
        </section>
    );
}
