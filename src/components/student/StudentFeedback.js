import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";

function StudentFeedback(props){
    let data = useLocation();
    console.log("feedback", data.state)
    return <>
        <Navigation data={data.state}></Navigation>
        <p><b>Feedback From </b></p>
    </>
}
export default StudentFeedback;