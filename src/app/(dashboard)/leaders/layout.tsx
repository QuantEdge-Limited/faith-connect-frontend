
// app/(landing)/layout.tsx
export default function LeadersDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
      
        <main>{children}</main>
       
      </div>
    </>
  );
}
