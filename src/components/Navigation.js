import { Box, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

function Navigation(props){
    let role=props.data;
    let navigate = useNavigate();
    //console.log("logged in users role",role.role)
    function funcTabChange(event){
        console.log(event.target.textContent)
        if(role.role==="Student"){
            var targetTab=event.target.textContent;
            if(targetTab === "Feedback"){
                navigate("/studentfeedback",{state:role})
            }
            if(targetTab==="Home"){
                navigate("/studenthome",{state:role})
            }
        }
        else if(role.role==="Teacher"){
            var targetTab=event.target.textContent;
            console.log(targetTab);
            if(targetTab === "Home"){
                navigate("/teacherhome",{state:role})
            }
            else if(targetTab === "Create Exam"){
                console.log("hi")
                navigate("/teacherexam",{state:role});
            }
            else if(targetTab==="Subject"){
                navigate("/createsubject",{state:role});
            }
        }
    }
    return <>
        <Box className={style.navBox}>
            <Tabs sx={{ width: '100%',dverticalAlign:'middle', color:'black', fontWeight:'bold'}} 
                variant="standard" centered textColor="primary" indicatorColor="primary" onChange={(event)=>{funcTabChange(event)}}>
                <Tab label="Home" value="1" />
                <Tab label="Exams" value="2" />
                <Tab label="Certificate" value="3" />
                <Tab label="Feedback" value="4" />
                <Tab label="Subject" value="6"></Tab>
                <Tab label="Create Exam" value="5"></Tab>
            </Tabs>
        </Box>
    </>
}
export default Navigation;