import { useCallback } from "react";
import { useLang } from "@/lib/i18n";

export default function LanguageToggle(): JSX.Element {
  const { setLang, t } = useLang();

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, [setLang]);

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.changeLang}
      className="btn-outline px-3 py-1 text-sm shadow-sm"
    >
      {t.changeLang}
    </button>
  );
}