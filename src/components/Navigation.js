import { Box, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navigation(props){
    let role=props.data;
    let navigate = useNavigate();
    console.log("logged in users role",role)
    function funcTabChange(event){
        console.log(event.target.textContent)
        var targetTab=event.target.textContent;
        if(targetTab === "Feedback"){
            navigate("/studentfeedback",{state:role})
        }
    }
    return <>
        <Box sx={{ width: '50%', background: '#d8d6d6', display:'inline-flex'}}>
            <Tabs sx={{ width: '100%',dverticalAlign:'middle', color:'black', fontWeight:'bold'}} 
                variant="standard" centered textColor="primary" indicatorColor="primary" onChange={(event)=>{funcTabChange(event)}}>
                <Tab label="Home" value="1" />
                <Tab label="Exams" value="2" />
                <Tab label="Certificate" value="3" />
                <Tab label="Feedback" value="4" />
            </Tabs>
            
        </Box>
    </>
}
export default Navigation;