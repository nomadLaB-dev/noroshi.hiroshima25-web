import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0a1a] via-[#1a0f2e] to-[#0f0a1a]">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="text-sanfrecce-gradient">
            NOROSHI.HIROSHIMA
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-16">
          統合ランディングページ
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* toC-lp Card */}
          <Link href="/toc" className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300 h-[200px] flex flex-col justify-evenly">
            <div>
              <span className="section-title-en">TO CONSUMER</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              一般参加者向け
            </h2>
            <p className="text-gray-400">
              君の「可能性」に火をつけろ。
            </p>
            <div className="text-[var(--sanfrecce-gold)] font-semibold">
              詳しく見る →
            </div>
          </Link>

          {/* toW-lp Card */}
          <Link href="/tow" className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300 h-[200px] flex flex-col justify-evenly">
            <div>
              <span className="section-title-en">TO WORKPLACE</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              事業所向け
            </h2>
            <p className="text-gray-400">
              「想像」を「創造」へ
            </p>
            <div className="text-[var(--sanfrecce-gold)] font-semibold">
              詳しく見る →
            </div>
          </Link>

          {/* toB-lp Card */}
          <Link href="/tob" className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300 h-[200px] flex flex-col justify-evenly">
            <div>
              <span className="section-title-en">TO BUSINESS</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              企業向け
            </h2>
            <p className="text-gray-400">
              Coming Soon...
            </p>
            <div className="text-[var(--sanfrecce-gold)] font-semibold">
              詳しく見る →
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
