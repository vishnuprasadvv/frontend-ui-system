"use client"

import * as React from "react"
import { Textarea } from "../components/Textarea/textarea"

export default function TextareaDemo() {
  const [value, setValue] = React.useState("")

  return (
    <div className="p-10 mx-auto space-y-12 bg-background">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Textarea Variants</h2>

        {/* Standard Usage */}
        <Textarea
          label="Project Description"
          placeholder="Enter a detailed description..."
          helperText="Describe the goals and objectives of your project."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Auto-sizing Demo */}
        <Textarea
          label="Auto-sizing (Try typing multiple lines)"
          placeholder="This textarea grows with your content..."
          className="field-sizing-content"
          defaultValue="Line 1\nLine 2\nLine 3"
        />

        {/* Error State */}
        <Textarea
          label="Feedback"
          required
          error="Feedback cannot be empty."
          placeholder="Tell us what you think..."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Size Comparison</h2>
        <div className="grid gap-4">
          <Textarea 
            size="sm" 
            label="Small Size (sm)" 
            placeholder="Compact for sidebars..." 
          />
          
          <Textarea 
            size="md" 
            label="Medium Size (md)" 
            placeholder="Standard form field..." 
          />
          
          <Textarea 
            size="lg" 
            label="Large Size (lg)" 
            placeholder="Great for long-form content..." 
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">State Testing</h2>
        <div className="grid gap-4">
          <Textarea 
            disabled 
            label="Disabled Textarea" 
            defaultValue="This content is read-only and greyed out." 
          />
          
          <Textarea 
            readOnly 
            label="ReadOnly Textarea" 
            defaultValue="You can highlight this, but not edit it." 
          />
        </div>
      </section>
    </div>
  )
}