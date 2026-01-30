"use client";

import * as React from "react";

import { Select } from "../components/Select/select";

/* ---------------------------------- */

const COUNTRIES = [
  { label: "India", value: "IN" },
  { label: "United States", value: "US" },
  { label: "Germany", value: "DE" },
  { label: "Japan", value: "JP" },
  { label: "Australia", value: "AU" },
];

/* ---------------------------------- */

export default function SelectDemo() {
  const [country, setCountry] = React.useState<string>("");

  const [sizeExample, setSizeExample] = React.useState<string>("IN");

  return (
    <div className="p-10 space-y-12 max-w-md">
      <h1 className="text-2xl font-semibold">Select Component Demo</h1>

      {/* ---------------- BASIC ---------------- */}

      <section className="space-y-3">
        <h2 className="font-medium">Basic</h2>

        <Select
          value={country}
          onChange={setCountry}
          options={COUNTRIES}
          placeholder="Choose country"
        />

        <p className="text-sm text-muted-foreground">
          Selected: {country || "none"}
        </p>
      </section>

      {/* ---------------- PRESET VALUE ---------------- */}

      <section className="space-y-3">
        <h2 className="font-medium">With Default</h2>

        <Select
          value={sizeExample}
          onChange={setSizeExample}
          options={COUNTRIES}
        />
      </section>

      {/* ---------------- DISABLED ---------------- */}

      <section className="space-y-3">
        <h2 className="font-medium">Disabled</h2>

        <Select
          value="US"
          onChange={() => {}}
          options={COUNTRIES}
          disabled
        />
      </section>

      {/* ---------------- SIZE VARIANTS ---------------- */}

      <section className="space-y-4">
        <h2 className="font-medium">Sizes</h2>

        <Select
          value={sizeExample}
          onChange={setSizeExample}
          options={COUNTRIES}
          size="sm"
        />

        <Select
          value={sizeExample}
          onChange={setSizeExample}
          options={COUNTRIES}
          size="md"
        />

        <Select
          value={sizeExample}
          onChange={setSizeExample}
          options={COUNTRIES}
          size="lg"
        />
      </section>
    </div>
  );
}
