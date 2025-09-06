import { useState } from "react";
import { Inputs } from "./Inputs";
import Contact from "./Contact";

export default function Summary() {
    const [capture, setCapture] = useState("")

    const handleSummary = (field, value) => {
        
        setCapture(prev => ({
        ...prev,
        [field]:value
       }))
        
    }

    return (
        <div className="contactContainer">
            <div className="summarySection">
                <h2 className="infoAndContact">Summary</h2>
                <Inputs section_name={"Summary"} onSend={handleSummary} />
            </div>

            <div className="summaryContainer">
                <div className="summaryTitle">Summary</div>
                <div className="summaryContent">{capture.Summary}</div>
            </div>

        </div>
    )
}