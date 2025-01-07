export default function LoginPageLayout({ children }: { children: React.ReactNode }) {
  return(
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}