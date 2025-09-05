import { useState } from "react"

export function Inputs(props) {
    const [summary, setSummary] = useState("")
    const [draft, setDraft] = useState(summary)

    const formSubmit = (e) => {
        e.preventDefault()
        setSummary(draft)
        props.onSend(props.section_name,draft)
        setDraft("")
    }

    const inputSubmit = (e) => {
        if(e.currentTarget.value.length < 350) {
            setDraft(e.currentTarget.value)
        }
    }


    return (
    <>
        <form action="post" onSubmit={ formSubmit} >

            <label htmlFor="summary">{props.section_name}:</label>
            <input
                name={props.section_name} 
                id="summary"
                value={draft}
                onInput={ inputSubmit }
            />
            
            <button type="submit">Submit</button>
            
        </form>
    </>
    )
}