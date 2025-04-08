import { Route, Router, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import style from "./style.module.css";
import { Box, Container } from "@mui/material";

function StudentHome(){
    let data=useLocation();
    let loggedInUser=data.state;
    console.log("loggedInUser",loggedInUser)
    var loggedInUserName = loggedInUser.fistName + " " + loggedInUser.lastName;
    var date=new Date().toDateString();
    console.log(date)
    return <>
        <Navigation data={loggedInUser.role}></Navigation>
        <p className={style.userName}>Welcome,<br></br><b> {loggedInUserName.toUpperCase()}</b></p>
        <p className={style.userName}>{date}</p>
        <Container className={style.studentHomeContainer}>
            <Box className={style.studentHomeBox}>
                <p>Previous Exam Performance</p>
            </Box>
            <Box className={style.studentHomeBox}>
                <p>Upcoming Exams</p>
            </Box>
            <Box className={style.studentHomeBox}>
                <p>Overall Performance</p>
            </Box>
        </Container>
    </>
}
export default StudentHome;