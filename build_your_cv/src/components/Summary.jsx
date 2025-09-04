import { useState } from "react"

export function Summary({section_name}) {
    const [summary, setSummary] = useState("")
    const [draft, setDraft] = useState(summary)
    return (
    <>
        <form action="post" onSubmit={(e) => {
            e.preventDefault()
            setSummary(draft)
            setDraft("")
        }}>

            <label htmlFor="summary">{section_name}:</label>
            <input

                name="summary" 
                id="summary"
                value={draft}
                onInput={(e) => {
                    if(e.currentTarget.value.length < 350) 
                        setDraft(e.currentTarget.value)

                }}
            />
            
            
            <button type="submit">Submit</button>
            
            <div className={section_name}> <h2 className="summaryTitle">{section_name}:</h2> {summary}</div>
        </form>
    </>
    )
}