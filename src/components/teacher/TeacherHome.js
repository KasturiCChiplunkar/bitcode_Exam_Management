import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import style from "../style.module.css";
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";

function TeacherHome(){
    let data=useLocation();
    let loggedInUser=data.state;
    var loggedInUserName = loggedInUser.fistName + " " + loggedInUser.lastName;
    console.log(loggedInUserName)
    let loggedUser = useSelector((state)=>({...state.rootReducer.user}))
    console.log("loggedUser",loggedUser);
    var date=new Date().toDateString();
    console.log(date)
    return <>
        <Navigation data={loggedInUser}></Navigation>
        <p className={style.userName}>Welcome,<br></br><b> {loggedInUserName.toUpperCase()}</b></p>
        <p className={style.userName}>{date}</p>
        <Container className={style.studentHomeContainer}>
            <Box className={style.studentHomeBox}>
                <p>Total Students</p>
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
export default TeacherHome;