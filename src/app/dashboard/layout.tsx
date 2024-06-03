export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Sidenav</aside>
      <main>{children}</main>
    </div>
  );
}
