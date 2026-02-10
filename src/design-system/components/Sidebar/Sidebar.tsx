import * as React from "react";
import { cn } from "@/lib/utils";

export function Sidebar({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside 
      className={cn("flex w-64 flex-col border-r bg-card h-full", className)} 
      {...props}
    >
      <div className="flex flex-col gap-1 p-4">
        {children}
      </div>
    </aside>
  );
}

export interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
}

export function SidebarItem({ icon, active, children, className, ...props }: SidebarItemProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      {icon && <span className="size-4">{icon}</span>}
      {children}
    </button>
  );
}