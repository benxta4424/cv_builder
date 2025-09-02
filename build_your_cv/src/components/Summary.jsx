import { useState } from "react"

export function Summary() {
    const [summary, setSummary] = useState("")
    const [draft, setDraft] = useState(summary)
    return (
    <>
        <form action="post" onSubmit={(e) => {
            e.preventDefault()
            setSummary(draft)
            setDraft("")
        }}>

            <label htmlFor="summary">Summary:</label>
            <textarea

                name="summary" 
                id="summary"
                value={draft}
                onInput={(e) => {
                    if(e.currentTarget.value.length < 350) 
                        setDraft(e.currentTarget.value)

                }}
            />
            
            
            <button type="submit">Submit</button>
            
            <div className="summarySection"> <h2 className="summaryTitle">Summary:</h2> {summary}</div>
        </form>
    </>
    )
}