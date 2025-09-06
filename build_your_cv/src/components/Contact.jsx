import { useState } from "react"
import { Inputs } from "./Inputs"

export default function Contact(props) {
  const [capture, setCapture] = useState({})

  const allInputs = ["Name", "Phone", "Email", "Github"]

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
          <div className="name">{capture.Name}</div>
          <div className="phone">{capture.Phone}</div>
        </div>

        <div className="emailAndGithub">
          <div className="email">{capture.Email}</div>
          <a className="github">{capture.Github}</a>
        </div>
      </div>
    </div>
    </>
  )
}
