import { ShieldCheck, CheckCircle } from "lucide-react";
import styles from "./Community.module.css";

export default function Community() {
    return (
        <section id="community" className={styles.section}>
            <div className={`${styles.header} reveal`}>
                <span className="section-title-en">Exclusive Community</span>
                <h3 className={styles.title}>役職者限定のクリーンな社交場。</h3>
                <div className="section-line"></div>
            </div>
            <div className={`max-w-5xl mx-auto glass-card ${styles.card} reveal`}>
                <div className={styles.iconBg}>
                    <ShieldCheck className="w-48 h-48 text-sanfrecce-gold" />
                </div>
                <div className={styles.cardContent}>
                    <div className="added-value-badge mb-6">EXCLUSIVE VALUE</div>
                    <p className={styles.descriptionMain}>
                        最終発表会および懇親会への参加は、
                        <br />
                        <span className="text-sanfrecce-gradient underline decoration-sanfrecce-gold underline-offset-8">
                            部課長・経営層以上の役職者
                        </span>
                        に限定。
                    </p>
                    <div className={styles.grid}>
                        <div className={styles.row}>
                            <CheckCircle className="text-yellow-500 shrink-0 w-8 h-8" />
                            <p>
                                一方的な営業活動は一切禁止。決裁権者同士が本音で語り合える、信頼のコミュニティです。
                            </p>
                        </div>
                        <div className={styles.row}>
                            <CheckCircle className="text-yellow-500 shrink-0 w-8 h-8" />
                            <p>
                                広島の未来を憂い、変革を望むリーダーたちとの「スピード感ある連携」が可能です。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
