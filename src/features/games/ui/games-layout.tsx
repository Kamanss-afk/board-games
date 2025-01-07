export function GamesLayout({
  title,
  extra,
  content,
  footer,
}: {
  title: React.ReactNode;
  content: React.ReactNode;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return(
    <section>
      <div className="flex justify-between py-3 text-sm lg:text-base">
        <h2 className="font-bold capitalize">{title}</h2>
        <div>{extra}</div>
      </div>
      <div>
        {content}
      </div>
      <div>
        {footer}
      </div>
    </section>
  );
}