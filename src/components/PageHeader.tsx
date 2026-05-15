type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="page-header">
      <p className="page-header__eyebrow">
        <span className="page-header__race-stripe" aria-hidden />
        {eyebrow}
      </p>
      <h1 className="page-header__title">{title}</h1>
      {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
    </header>
  );
}
