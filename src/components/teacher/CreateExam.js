import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import style from "../style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, MenuItem, Select, selectClasses } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { addExam } from "../../reducer/createExamReducer";

function CreateExam(){
    let data=useLocation();
    let loggedInUser=data.state;
    var loggedInUserName = loggedInUser.fistName + " " + loggedInUser.lastName;
    //console.log(loggedInUserName)
    let loggedUser = useSelector((state)=>({...state.rootReducer.user}))
    //console.log("loggedUser",loggedUser);
    var date=new Date().toDateString();
    //console.log(date);

    let [studentClass,setClass]=useState([]);
    let [classSubject,setClassSubject]=useState([]);
    let [txtStudentClass,setTxtClass]=useState('');
    let [subject,setSubject]=useState('');
    let txtExamTitle = useRef();
    let txtExamMarks=useRef();
    let txtExamTime=useRef();
    let txtMcq=useRef();
    let txtDescriptive=useRef();
    let [examOption,setSelectedValue]=useState("MCQ");
    let [timeFlag ,setTimeFlag]=useState(false);
    let dispatch=useDispatch();
    function handleClassChange(event){
        //console.log(event.target.value,event.target.textContent)
        setTxtClass(event.target.value)
        funGetSubjects(event.target.value);
    }
    function handleSubjectChange(event){
        console.log(event.target.value)
        setSubject(event.target.value)
    }
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    function funGetClass(){
        var data=window.localStorage.getItem("class");
        setClass(JSON.parse(data));
    }
    function funGetSubjects(selectedClass){
        var data=window.localStorage.getItem("subject");
        var subArr = JSON.parse(data);
        //console.log("subArr",subArr)
        console.log("selectedClass", selectedClass);
        for(let i=0;i<subArr.length;i++){
            console.log(subArr[i].className)
            if(subArr[i].className===selectedClass){
                console.log(subArr[i].subjectName)
                setClassSubject(subArr[i].subjectName)
            }
        }
    }
    function convertH2M(timeInHour){
        var timeParts = timeInHour.split(":");
        return Number(timeParts[0]) * 60 + Number(timeParts[1]);
    }
    function funGenerateExam(){
        var reg=/\b:/;
        var examTitle=txtExamTitle.current.value;
        var examMarks=txtExamMarks.current.value;
        var time=txtExamTime.current.value;
        console.log(time)
        var examTime,timeInMinutes;
        if(reg.test(time)){
            timeInMinutes = convertH2M(time);
            setTimeFlag(false);
        }
        else{
            setTimeFlag(true);
        }
        console.log(timeInMinutes);
        var obj={
            examTitle:examTitle,
            examClass:txtStudentClass,
            examMarks:examMarks,
            examTime:timeInMinutes,
            examOption:examOption
        }
        console.log(obj)
        dispatch(addExam(obj));
    }
    useEffect(()=>{
        funGetClass();
    },[]);

    return <>
        <Navigation data={loggedInUser}></Navigation>
        <p className={style.userName}>Welcome,<br></br><b> {loggedInUserName.toUpperCase()}</b></p>
        <p className={style.userName}>{date}</p>
        <center><h3>Exam Form</h3></center>
        <Container className={style.sectionBox}>
            <Box>
                <Box className={style.boxPadding}>
                    <label className={style.labelAlign}>Exam Title : </label>
                    <input type="text" ref={txtExamTitle} className={style.fieldAlign} />
                </Box>
                
                <Box className={style.boxPadding}>
                    <label className={style.labelAlign}>Class : </label>
                    <Select 
                        variant="standard"
                        className={style.signUpSelect}
                        value={txtStudentClass}
                        onChange={(event)=>{
                            handleClassChange(event)
                        }}>
                        <MenuItem value={0}>Select Class</MenuItem>
                        {
                            studentClass.map((x,i)=>{
                                return <MenuItem value={studentClass[i]} key={i}>{studentClass[i]}</MenuItem>
                            })
                        }
                    </Select>
                </Box>
                <Box className={style.boxPadding}>
                    <label className={style.labelAlign}>Subject : </label>
                    <Select 
                        variant="standard"
                        className={style.signUpSelect}
                        value={subject}
                        onChange={(event)=>{
                            handleSubjectChange(event)
                        }}>
                        <MenuItem value={0} key={0}>Select Subject</MenuItem>
                        {
                            console.log(classSubject)
                        }
                        {
                            classSubject.map((x,i)=>{
                                return <MenuItem value={classSubject[i]} key={i}>{classSubject[i]}</MenuItem>
                            })
                        }
                    </Select>
                </Box>
                <Box className={style.boxPadding}>
                    <label className={style.labelAlign}>Marks : </label>
                    <input type="text" className={style.fieldAlign} maxLength="3" minLength="1" ref={txtExamMarks} />
                </Box>
                <Box className={style.boxPadding}>
                    <label className={style.labelAlign}>Total Exam Time : </label>
                    <input type="text" className={style.fieldAlign} ref={txtExamTime} />
                    {
                        timeFlag && <p className={style.errorMsg}>Please correct time. Use <b>:</b></p>
                    }
                </Box>
                <Box className={style.boxPadding}>
                    <label className={style.labelAlign}>Exam Options : </label>
                    <label className={style.labelAlign}> MCQ :</label> 
                    <input type="radio" className={style.radioAlign} ref={txtMcq} value="MCQ" name="exam" onChange={handleChange}/>
                    <label className={style.labelAlign}>Descriptive : </label>
                    <input type="radio" className={style.radioAlign} ref={txtDescriptive} onChange={handleChange} value="Descriptive" name="exam"/>
                </Box>
                <Box>
                    <Button className={style.generateExamBtn} onClick={funGenerateExam}>Generate Exam</Button>
                </Box>
            </Box>
        </Container>
    </>
}
export default CreateExam;