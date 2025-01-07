import { HeaderNav } from '@/features/layout/nav';

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNav />
      <main>
        {children}
      </main>
    </>
  );
}
