import { useLang } from "../../i18n";

export default function Footer({ onOpenTerminal }) {
    const { t } = useLang();
    return (
        <footer className="w-full bg-transparent py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-[#6c93c7] text-sm md:text-base text-center font-mono">
                    <span className="block sm:inline text-[#B5E7F7] font-mono text-base md:text-lg">© {new Date().getFullYear()} Nazar Blanco<span className="hidden sm:inline"> | </span></span> {t.footer.built}
                </div>
                <button
                    type="button"
                    onClick={onOpenTerminal}
                    className="block mx-auto mt-2 text-xs font-mono text-[#6c93c7]/70 hover:text-[#99ECFF] transition-colors duration-300"
                >
                    {t.footer.hint}
                </button>
            </div>
        </footer>
    )
}
