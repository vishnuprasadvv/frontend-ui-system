import * as React from "react";
import { cn } from "@/lib/utils";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode;
  actions?: React.ReactNode;
}

export function Navbar({ brand, actions, className, children, ...props }: NavbarProps) {
  return (
    <nav 
      className={cn(
        "flex h-16 items-center justify-between border-b bg-background px-6",
        className
      )} 
      {...props}
    >
      <div className="flex items-center gap-4">
        {brand && <div className="font-bold text-xl">{brand}</div>}
        {children}
      </div>
      
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </nav>
  );
}