import Link from "next/link";
import { useLang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header(): JSX.Element {
  const { t } = useLang();

  return (
    <header
      className="w-full max-w-6xl mx-auto flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between"
      aria-label={t.name}
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">{t.name}</h1>
        <p className="text-sm text-muted mt-1">{t.role}</p>
      </div>

      <div className="flex items-center gap-4">
        <Link href="#contact" prefetch={false} className="hidden sm:inline-flex btn-primary">
          {t.contactTitle}
        </Link>
        <LanguageToggle />
      </div>
    </header>
  );
}