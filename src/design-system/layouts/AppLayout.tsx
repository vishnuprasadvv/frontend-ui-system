interface AppLayoutProps {
  navbar: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export function AppLayout({ navbar, sidebar, children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar Slot */}
      <aside className="hidden md:flex w-64 flex-col border-r">
        {sidebar}
      </aside>

      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Navbar Slot */}
        <header className="h-16 border-b">
          {navbar}
        </header>

        {/* Main Content Slot */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}