import { useState } from "react"
import { Summary } from "./Summary"

export default function Contact() {
  const [summaries, setSummaries] = useState({
    "Full Name": "",
    "Address": "",
    "Email": "",
    "Phone": "",
    "Github": "",
  })

  // helper to update a single field
  const updateSummary = (key, value) => {
    setSummaries((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="contactSection">
      <h1>Info and Contact:</h1>

      {/* Render the inputs */}
      {Object.keys(summaries).map((section) => (
        <Summary
          key={section}
          section_name={section}
          value={summaries[section]}
          onChange={(val) => updateSummary(section, val)}
        />
      ))}

      {/* Render collected results separately */}
      <div className="printSection">
        <h2>Collected Info:</h2>
        {Object.entries(summaries).map(([key, value]) => (
          <div key={key} className={key}>
            <h3>{key}:</h3> {value}
          </div>
        ))}
      </div>
    </div>
  )
}
