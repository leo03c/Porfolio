import Link from "next/link";
import { useLang } from "@/lib/i18n";

const CV_PATH = "/CV_Leonardo_Castillo.pdf";

export function Hero(): JSX.Element {
  const { t } = useLang();

  return (
    <section id="hero" className="mb-16 scroll-mt-24" aria-labelledby="hero-title">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="kicker mb-2">{t.role}</p>
          <h2 id="hero-title" className="text-4xl font-extrabold leading-tight mb-4">
            {t.name}
          </h2>
          <p className="text-lg text-slate-700">{t.heroPitch}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#projects" prefetch={false} className="btn-primary">
              {t.projectsTitle}
            </Link>
            <a href={CV_PATH} download className="btn-outline">
              {t.downloadCV}
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            aria-hidden="true"
            className="flex h-64 w-64 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 via-white to-slate-50 text-slate-400"
          >
            Logo / Avatar
          </div>
        </div>
      </div>
    </section>
  );
}