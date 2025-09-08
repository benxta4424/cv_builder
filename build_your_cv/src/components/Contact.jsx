import { useState } from "react"
import { Inputs } from "./Inputs"

export default function Contact(props) {
  const [capture, setCapture] = useState({})

  const allInputs = [props.first, props.second, props.third, props.fourth]

  const handleSummary = (field, value) => {
    setCapture(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <>
    <div className="contactContainer">
      <div className="summarySection">
        <h2 className="infoAndContact">{props.title}</h2>

        {allInputs.map((customInput) => (
          <Inputs 
          key = {customInput}
          section_name = {customInput}
          onSend = {handleSummary}
          />
        ))}
      </div>

      <div className="capturedContainer">
        <div className="nameAndPhone">
          <div className="sectionTitle">{props.title}</div>
          <div className="name">{capture[props.first]}</div>
          <div className="phone">{capture[props.second]}</div>
        </div>

        <div className="emailAndGithub">
          <div className="email">{capture[props.third]}</div>
          <div className="github">{capture[props.fourth]}</div>
        </div>
      </div>
    </div>
    </>
  )
}
