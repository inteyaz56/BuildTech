function SectionHeader({ eyebrow, title, description }) {
  return (
    <div>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="mt-1 max-w-2xl text-sm text-slate-500">{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
