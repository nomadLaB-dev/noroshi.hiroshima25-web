import Link from 'next/link';

export default function SectionCTA() {
    return (
        <div className="mt-12 text-center reveal">
            <Link
                href="#contact"
                className="inline-block bg-sanfrecce-purple hover:bg-sanfrecce-purple-dark text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
                エントリーする
            </Link>
        </div>
    );
}
