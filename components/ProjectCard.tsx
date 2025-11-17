import { useLang } from "@/lib/i18n";

type Project = {
  title: string;
  short: string;
  tags?: string[];
  repo?: string;
  demo?: string;
};

type ProjectCardProps = {
  project: Project;
};

const isExternal = (url?: string): url is string => !!url && /^https?:\/\//i.test(url);

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const { t } = useLang();
  const { title, short, tags, repo, demo } = project;
  const headingId = `project-${slugify(title)}`;

  return (
    <article className="card transition-shadow hover:shadow-md" aria-labelledby={headingId}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 id={headingId} className="text-lg font-semibold">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{short}</p>

          {!!tags?.length && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Etiquetas">
              {tags.map((tag) => (
                <li key={tag}>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{tag}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col items-end gap-2">
          {repo && (
            <a
              href={repo}
              target={isExternal(repo) ? "_blank" : undefined}
              rel={isExternal(repo) ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-accent"
            >
              {t.viewRepo}
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target={isExternal(demo) ? "_blank" : undefined}
              rel={isExternal(demo) ? "noopener noreferrer" : undefined}
              className="text-sm btn-outline"
            >
              {t.seeMore}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}