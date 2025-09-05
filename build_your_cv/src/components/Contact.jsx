import { useState } from "react"
import { Inputs } from "./Inputs"

export default function Contact() {
  const [capture, setCapture] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Github: ""
  })

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
        <h2>Info and Contact:</h2>

        <Inputs section_name={"Name"} onSend={handleSummary} />
        <Inputs section_name={"Phone"} onSend={handleSummary} />
        <Inputs section_name={"Email"} onSend={handleSummary} />
        <Inputs section_name={"Github"} onSend={handleSummary} />
      </div>

      <div className="capturedContainer">
        <div className="nameAndPhone">
          <div className="name">{capture.Name}</div>
          <div className="phone">{capture.Phone}</div>
        </div>

        <div className="emailAndGithub">
          <div className="email">{capture.Email}</div>
          <div className="github">{capture.Github}</div>
        </div>
      </div>
    </div>
    </>
  )
}
