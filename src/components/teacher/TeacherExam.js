import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import style from "../style.module.css";
import { Button } from "@mui/material";

function TeacherExam(){
    let data=useLocation();
    let loggedInUser=data.state;
    var loggedInUserName = loggedInUser.fistName + " " + loggedInUser.lastName;
    //console.log(loggedInUserName)
    let loggedUser = useSelector((state)=>({...state.rootReducer.user}))
    //console.log("loggedUser",loggedUser);
    var date=new Date().toDateString();
    //console.log(date);
    let navigate=useNavigate();
    let examArr=useSelector(state=>({
        ...state.rootReducer.createExam
    }));
    console.log("examArr in teacher exam form",examArr)

    function funCreateExam(){
        navigate("/teachercreateexam",{state:loggedInUser})
    }
    return <>
        <Navigation data={loggedInUser}></Navigation>
        <p className={style.userName}>Welcome,<br></br><b> {loggedInUserName.toUpperCase()}</b></p>
        <p className={style.userName}>{date}</p>
        <p>show all exams in tabuler format</p>
        <Button className={style.createExamBtn} onClick={funCreateExam}>Create Exam</Button>
    </>
}
export default TeacherExam;