export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return(
    <div className="grid gap-4">
      {children}
    </div>
  );
}