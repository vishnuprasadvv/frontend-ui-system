import { Button } from "@/design-system/components/Button/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  TrendingUp,
  Bell,
  Settings,
  Mail,
  Trash2,
  Plus,
  Download,
  Github,
} from "lucide-react";
import { ThemeProvider } from "./design-system/theme/ThemeProvider";
import { Input } from "@/design-system/components/Input/Input";
import { useForm } from "react-hook-form";
import { ThemeSwitcher } from "./design-system/components/ThemeSwitcher/ThemeSwitcher";
import { ConfirmationDialog, Tabs } from "./design-system";
import { useState } from "react";

// -----------------------------
// INPUT PLAYGROUND COMPONENT
// -----------------------------
function InputPlayground() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Component – Variants</CardTitle>
        <CardDescription>
          Visual test bed for states, icons, errors, and password toggles.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default */}
        <Input 
          placeholder="Enter your name" label="Name" error='Enter your name' />
        {/* With Left Icon */}
        <Input
          placeholder="you@example.com"
          label="Email"
          prefix={<Mail size={16} />}
          {...register("email", {
            required: "Email is required",
          })}
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Enter your password..."
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
          error={errors.password?.message}
        />

        {/* Disabled */}
        <Input label="Disabled" id="disabled" placeholder="Disabled field" disabled />
      </CardContent>
    </Card>
  );
}

export default function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleConfirm = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert("Action confirmed!");
        resolve();
        setDialogOpen(false);
      }, 1500);
    });
  };

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-background text-foreground transition-all duration-300">
        {/* SIDEBAR */}
        <aside
          style={{ width: "var(--sidebar-width)" }}
          className="border-r bg-card flex flex-col sticky top-0 h-screen"
        >
          <div
            className="p-6 flex items-center gap-3 border-b"
            style={{ height: "var(--header-height)" }}
          >
            <span className="font-bold text-lg">Xaults</span>
          </div>
          <nav className="p-4 space-y-2 flex-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 bg-accent/50"
            >
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              Payments
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              Customers
            </Button>
          </nav>
        </aside>

        <main className="flex-1">
          {/* HEADER */}
          <header
            style={{ height: "var(--header-height)" }}
            className="border-b px-8 flex items-center justify-between bg-background/50 backdrop-blur-sm sticky top-0 z-10"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Pages</span> / <span>Theme Test</span>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary text-primary">
                Live Theme
              </Badge>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell size={18} />
              </Button>
              <ThemeSwitcher />
            </div>
          </header>

          <div className="p-8 max-w-5xl mx-auto space-y-8">
            {/* BUTTON GALLERY */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">
                Component Gallery
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>
                    Observe how corners and colors shift across themes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Button className="gap-2" leftIcon={<Plus size={16} />}>
                      Primary Action
                    </Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      leftIcon={<Download size={16} />}
                    >
                      Outline
                    </Button>
                    <Button
                      variant="destructive"
                      className="gap-2"
                      leftIcon={<Trash2 size={16} />}
                    >
                      Delete
                    </Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="link">Link Style</Button>
                  </div>

                  <hr className="border-border" />

                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="lg" className="px-8">
                      Large CTA
                    </Button>
                    <Button variant="outline" size="icon">
                      <Settings size={18} />
                    </Button>
                    <Button
                      className="bg-[#24292F] hover:bg-[#24292F]/90 text-white gap-2"
                      leftIcon={<Github size={16} />}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      className="border-success text-success hover:bg-success/10 gap-2"
                      leftIcon={<Mail size={16} />}
                    >
                      Contact Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* STATUS GRID */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">
                Semantic Feedback
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-t-4 border-t-success">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          System Health
                        </p>
                        <h3 className="text-2xl font-bold">Optimal</h3>
                      </div>
                      <div className="p-2 bg-success/10 text-success rounded-lg">
                        <CheckCircle2 size={20} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-warning">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Pending Tasks
                        </p>
                        <h3 className="text-2xl font-bold">12</h3>
                      </div>
                      <div className="p-2 bg-warning/10 text-warning rounded-lg">
                        <AlertTriangle size={20} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-primary">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Performance
                        </p>
                        <h3 className="text-2xl font-bold">+24%</h3>
                      </div>
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        <TrendingUp size={20} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CONFIRMATION DIALOG TEST */}
            <Card>
              <CardHeader>
                <CardTitle>Confirmation Dialog Test</CardTitle>
                <CardDescription>
                  Click the button below to open the confirmation dialog.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setDialogOpen(true)}
                  leftIcon={<AlertTriangle size={16} />}
                >
                  Delete Item
                </Button>
              </CardContent>
            </Card>

            {/* TABS TEST */}
            {/* INPUT VARIANTS */}
            <InputPlayground />

            <Tabs
              tabs={[
                {
                  value: "tab1",
                  label: "Dashboard",
                  content: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">
                        Dashboard Overview
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        This dashboard panel contains a long description to
                        simulate real-world layouts. It helps verify scrolling
                        behavior, spacing, line height, typography rhythm, and
                        responsiveness across breakpoints. The purpose is to
                        ensure the tab system behaves correctly even when
                        content grows vertically or horizontally.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-xl border bg-card p-6 shadow-sm"
                          >
                            <h4 className="font-medium mb-2">
                              Metric Block {i + 1}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer nec odio. Praesent libero. Sed
                              cursus ante dapibus diam. Sed nisi. Nulla quis sem
                              at nibh elementum imperdiet.
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <p key={i} className="text-sm leading-relaxed">
                            Row {i + 1}: Pellentesque habitant morbi tristique
                            senectus et netus et malesuada fames ac turpis
                            egestas. Vestibulum tortor quam, feugiat vitae,
                            ultricies eget, tempor sit amet, ante.
                          </p>
                        ))}
                      </div>
                    </div>
                  ),
                },
                {
                  value: "tab2",
                  label: "Payments",
                  content: (
                    <div className="space-y-5">
                      <h3 className="text-xl font-semibold">Payment History</h3>

                      <div className="space-y-3">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex justify-between border-b pb-3"
                          >
                            <span>Invoice #{1000 + i}</span>
                            <span className="text-muted-foreground">
                              $ {(i + 1) * 240}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-muted-foreground text-sm">
                        Scroll through this list to ensure tab panels maintain
                        layout integrity and do not overflow horizontally or
                        collapse unexpectedly.
                      </p>
                    </div>
                  ),
                },
                {
                  value: "tab3",
                  label: "Customers",
                  content: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">
                        Customer Directory
                      </h3>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div
                            key={i}
                            className="border rounded-xl p-5 bg-card"
                          >
                            <h4 className="font-medium">Customer {i + 1}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Joined: 2024-{i + 1}-12
                            </p>
                            <p className="text-sm mt-2 leading-relaxed">
                              Customer description text goes here. This block
                              exists only to expand vertical space and validate
                              the UI under heavy content.
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              fullWidth
            />
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
          isCancelButtonVisible
          isShowCloseButton
          titleAlignment="center"
        />
      </div>
    </ThemeProvider>
  );
}
