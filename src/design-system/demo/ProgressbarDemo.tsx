import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "../components";

export function ProgressBarDemo() {
  const [value, setValue] = useState(35);
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-8 space-y-10 max-w-xl">
      <h2 className="text-xl font-semibold">ProgressBar Demo</h2>

      {/* Controls */}
      <div className="flex gap-3">
        <Button onClick={() => setValue((v) => Math.min(v + 10, 100))}>
          Increase
        </Button>

        <Button
          variant="outline"
          onClick={() => setValue((v) => Math.max(v - 10, 0))}
        >
          Decrease
        </Button>

        <Button
          variant="outline"
          onClick={() => setLoading((v) => !v)}
        >
          Toggle Loading
        </Button>
      </div>

      {/* Simple */}
      <section className="space-y-3">
        <h3 className="font-medium">Simple</h3>

        <ProgressBar value={value} loading={loading} type="percentage-only" size="xs" />
        <ProgressBar value={value} variant="success" />
        <ProgressBar value={value} variant="warning" />
        <ProgressBar value={value} variant="error" />
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="font-medium">Sizes</h3>

        <ProgressBar value={value} size="sm" />
        <ProgressBar value={value} size="md" />
        <ProgressBar value={value} size="lg" />
      </section>

      {/* With Label */}
      <section className="space-y-3">
        <h3 className="font-medium">With Label</h3>

        <ProgressBar
          value={value}
          type="with-label"
          label="Uploading files"
        />

        <ProgressBar
          value={value}
          type="with-label"
          variant="success"
        />
      </section>

      {/* Percentage Overlay */}
      <section className="space-y-3">
        <h3 className="font-medium">Percentage Only</h3>

        <ProgressBar
          value={value}
          type="percentage-only"
          size="md"
        />
      </section>

      {/* Loading */}
      <section className="space-y-3">
        <h3 className="font-medium">Loading</h3>

        <ProgressBar loading={loading} value={10} type="percentage-only"/>
        <ProgressBar loading={loading} size="lg" />
        <ProgressBar loading={loading} variant="warning" />
      </section>
    </div>
  );
}
