import Summary from "./Summary"
import { Inputs } from "./Inputs"
import Contact from "./Contact"

export default function Experience() {
    return (<>
        <div className="experienceSection">
            < Contact title="Experience" first="Company" second="Description" third="Period" fourth="Role" />
        </div>
    </>)
}