import Sidebar from "@/components/Sidebar";

// app/(dashboard)/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
