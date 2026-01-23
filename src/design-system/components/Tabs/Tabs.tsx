import {
  Tabs as ShadTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (val: string) => void;
  className?: string;
  fullWidth?: boolean; // optional: stretch tabs to full width
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  fullWidth = false,
}) => {
  return (
    <ShadTabs
      value={activeTab}
      onValueChange={onTabChange}
      className={cn("w-full", className)}
    >
      {/* Tabs List */}
      <TabsList
        className={cn(
          "flex overflow-x-auto border border-border shadow-sm",
          fullWidth ? "justify-between w-full" : "justify-start",
        )}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "relative px-4 py-2 min-w-[120px] sm:min-w-[150px]",
              "font-medium text-muted-foreground transition-colors",
              "data-[state=active]:text-card-foreground data-[state=active]:bg-card data-[state=active]:font-semibold",
              "after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full ",
              "after:scale-x-0 after:transition-transform after:duration-300",
              "data-[state=active]:after:scale-x-100",
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="pt-4">
          {tab.content}
        </TabsContent>
      ))}
    </ShadTabs>
  );
};

export { Tabs };
