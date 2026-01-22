import { Button } from "@/design-system/components/Button/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, AlertTriangle, Info, TrendingUp, Bell, 
  Settings, Mail, Trash2, Plus, Download, Github, 
  MoonIcon
} from "lucide-react";
import { ThemeProvider } from "./design-system/theme/ThemeProvider";
import { ThemeSwitcher } from "./design-system/components/ThemeSwitcher/ThemeSwitcher";
import { ConfirmationDialog } from "./design-system";
import { useState } from "react";

export default function App() {

    const [isDialogOpen, setDialogOpen] = useState(false);

  const handleConfirm = async () => {
    // Simulate async action
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert("Action confirmed!");
        resolve();
        setDialogOpen(false);
      }, 1500);
    });
  };


  return (
    <ThemeProvider >
      <div className="flex min-h-screen bg-background text-foreground transition-all duration-300">
        
        {/* SIDEBAR */}
        <aside style={{ width: 'var(--sidebar-width)' }} className="border-r bg-card flex flex-col sticky top-0 h-screen">
          <div className="p-6 flex items-center gap-3 border-b" style={{ height: 'var(--header-height)' }}>
            
            <span className="font-bold text-lg">Xaults</span>
          </div>
          <nav className="p-4 space-y-2 flex-1">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-accent/50">Dashboard</Button>
            <Button variant="ghost" className="w-full justify-start gap-3">Payments</Button>
            <Button variant="ghost" className="w-full justify-start gap-3">Customers</Button>
          </nav>
        </aside>

        <main className="flex-1">

     
          {/* HEADER */}
          <header style={{ height: 'var(--header-height)' }} className="border-b px-8 flex items-center justify-between bg-background/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Pages</span> / <span>Theme Test</span>
            </div>
            <div className="flex items-center gap-4">
               <Badge variant="outline" className="border-primary text-primary">Live Theme</Badge>
               <Button variant="outline" size="icon" className="rounded-full"><Bell size={18}/></Button>
               <ThemeSwitcher />
            </div>
          </header>

          <div className="p-8 max-w-5xl mx-auto space-y-8">
            
            {/* 1. BUTTONS GALLERY: The best way to see radius and color logic */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">Component Gallery</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>Observe how corners and colors shift across themes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Standard Variants */}
                  <div className="flex flex-wrap gap-4">
                    <Button className="gap-2" leftIcon={<Plus size={16}/>}>Primary Action</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline" className="gap-2" leftIcon={<Download size={16}/>}>Outline</Button>
                    <Button variant="destructive" className="gap-2" leftIcon={<Trash2 size={16}/> }>Delete</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="link">Link Style</Button>
                  </div>

                  <hr className="border-border" />

                  {/* Size & Social Variants */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="lg" className="px-8">Large CTA</Button>
                    <Button variant="outline" size="icon"><Settings size={18}/></Button>
                    <Button className="bg-[#24292F] hover:bg-[#24292F]/90 text-white gap-2" leftIcon={<Github size={16}/>}>
                      GitHub
                    </Button>
                    <Button variant="outline" className="border-success text-success hover:bg-success/10 gap-2" leftIcon={<Mail size={16}/>}>
                       Contact Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 2. STATUS GRID */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">Semantic Feedback</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-t-4 border-t-success">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground">System Health</p>
                        <h3 className="text-2xl font-bold">Optimal</h3>
                      </div>
                      <div className="p-2 bg-success/10 text-success rounded-lg"><CheckCircle2 size={20}/></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-warning">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground">Pending Tasks</p>
                        <h3 className="text-2xl font-bold">12</h3>
                      </div>
                      <div className="p-2 bg-warning/10 text-warning rounded-lg"><AlertTriangle size={20}/></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-primary">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground">Performance</p>
                        <h3 className="text-2xl font-bold">+24%</h3>
                      </div>
                      <div className="p-2 bg-primary/10 text-primary rounded-lg"><TrendingUp size={20}/></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 3. INFORMATION PROTOCOL */}
            <Card>
              <CardHeader>
                <CardTitle>Theme Security Protocol</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl border border-dashed">
                  <Info className="text-primary mt-1" size={24} />
                  <div className="space-y-2">
                    <p className="text-sm font-medium leading-none">Global Variable Check</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This environment is rendered using logic. 
                      Every button variant above uses <strong>var(--radius)</strong> which is currently set to <strong></strong>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

              {/* EXAMPLE: Trigger Confirmation Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Confirmation Dialog Test</CardTitle>
                <CardDescription>Click the button below to open the confirmation dialog.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setDialogOpen(true)} leftIcon={<AlertTriangle size={16}/>}>
                  Delete Item
                </Button>
              </CardContent>
            </Card>

          </div>
        </main>

        {/* CONFIRMATION DIALOG */}
        <ConfirmationDialog
          open={isDialogOpen}
          title="Delete Item?"
          description="Are you sure you want to delete this item? This action cannot be undone."
          confirmText="Delete"
          cancelText="Cancel"
          icon={<AlertTriangle className="text-red-500" size={32} />}
          onConfirm={handleConfirm}
          onCancel={() => setDialogOpen(false)}
          isCancelButtonVisible={true}
          isShowCloseButton={true}
          titleAlignment="center"
        />

      </div>
    </ThemeProvider>
  );
}