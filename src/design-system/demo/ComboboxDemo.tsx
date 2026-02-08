import * as React from "react"
import { Combobox, type ComboboxOption } from "../components/Combobox/selectCombobox"

const FRAMEWORKS: ComboboxOption[] = [
  { label: "Next.js", value: "next" },
  { label: "React.js", value: "react" },
  { label: "SvelteKit", value: "svelte" },
  { label: "Vue.js", value: "vue" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
]

export default function ComboboxDemo() {
  const [single, setSingle] = React.useState<ComboboxOption | null>(null)
  const [multi, setMulti] = React.useState<ComboboxOption[]>([])
  const [loading, setLoading] = React.useState(false)

  // Simulation for loading state
  const handleLoadingToggle = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="p-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-background">
      
      {/* --- SECTION: BASIC VARIANTS --- */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b pb-2">Basic Variants</h2>
        
        <Combobox
          label="Single Select"
          options={FRAMEWORKS}
          value={single}
          onChange={setSingle}
          showClear
          helperText="Pick one framework."
        />

        <Combobox
          multiple
          label="Multi Select (Chips)"
          options={FRAMEWORKS}
          value={multi}
          onChange={(val) => setMulti(val ?? [])}
          placeholder="Select frameworks..."
        />

        <Combobox
          label="Error State"
          options={FRAMEWORKS}
          value={null}
          onChange={() => {}}
          error="This field is required to proceed."
          required
        />
      </div>

      {/* --- SECTION: SIZES & STATES --- */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b pb-2">Sizes & States</h2>
        
        <Combobox
          size="sm"
          label="Small Size"
          options={FRAMEWORKS}
          value={single}
          onChange={setSingle}
        />

        <Combobox
          size="md"
          label="Small Size"
          options={FRAMEWORKS}
          value={single}
          onChange={setSingle}
        />

        <Combobox
          size="lg"
          label="Large Size"
          options={FRAMEWORKS}
          value={single}
          onChange={setSingle}
        />

        <Combobox
          size="sm"
          label="Small Size"
          options={FRAMEWORKS}
          value={multi}
          onChange={(val) => setMulti(val ?? [])}
          multiple
        />
        <Combobox
          size="md"
          label="Small Size"
          options={FRAMEWORKS}
          value={multi}
          onChange={(val) => setMulti(val ?? [])}
          multiple
        />

        <Combobox
          size="lg"
          label="Large Size"
          options={FRAMEWORKS}
          value={multi}
          onChange={(val) => setMulti(val ?? [])}
          multiple
        />

        <Combobox
          label="Loading State"
          options={FRAMEWORKS}
          value={single}
          onChange={setSingle}
          loading={loading}
          helperText="Click the button to test loading logic"
        />
        <button 
          onClick={handleLoadingToggle}
          className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded hover:opacity-90"
        >
          Trigger 2s Load
        </button>

        <Combobox
          disabled
          label="Disabled State"
          options={FRAMEWORKS}
          value={single}
          onChange={() => {}}
        />
      </div>

      {/* --- SECTION: POSITIONING --- */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b pb-2">Positioning</h2>
        
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">Popup opens on the right side with 20px offset:</p>
          <Combobox
            label="Side: Right"
            side="right"
            sideOffset={20}
            options={FRAMEWORKS}
            value={null}
            onChange={() => {}}
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">Popup aligned to the end (right-aligned):</p>
          <Combobox
            label="Align: End"
            align="end"
            options={FRAMEWORKS}
            value={null}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  )
}