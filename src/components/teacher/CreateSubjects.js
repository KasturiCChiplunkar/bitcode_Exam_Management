import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import style from "../style.module.css";
import { Box, Button, Container, MenuItem, Select } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function CreateSubjects(){
    let data=useLocation();
    let loggedInUser=data.state;
    var loggedInUserName = loggedInUser.fistName + " " + loggedInUser.lastName;
    //console.log(loggedInUserName)
    var date=new Date().toDateString();
    //console.log(date)
    let [studentClass,setClass]=useState([]);
    let [txtStudentClass,setTxtClass]=useState('');
    let txtSubject=useRef();

    if(localStorage.getItem("subject")){
        var studArr = JSON.parse(localStorage.getItem("subject"));
    }
    else{
        var studArr = new Array();
    }

    function handleClassChange(event){
        //console.log(event.target.value,event.target.textContent)
        setTxtClass(event.target.value)
    }
    function funGetClass(){
        var data=window.localStorage.getItem("class");
        setClass(JSON.parse(data));
    }
    function funAdd(){
        var obj={
            subjectName:txtSubject.current.value,
            className:txtStudentClass
        }
        console.log(obj)
        studArr.push(obj);
        window.localStorage.setItem("subject",JSON.stringify(studArr));
        txtSubject.current.value="";
        setTxtClass("");
    }
    useEffect(()=>{
        funGetClass();
    },[]);
    return <>
        <Navigation data={loggedInUser}></Navigation>
        <p className={style.userName}>Welcome,<br></br><b> {loggedInUserName.toUpperCase()}</b></p>
        <p className={style.userName}>{date}</p>
        <Container className={style.sectionBox}>
            <Box className={style.boxPadding}>
            <   Box className={style.boxPadding}>
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
                    <label className={style.labelAlign}>Subject Name : </label>
                    <input type="text" ref={txtSubject} className={style.fieldAlign} />
                </Box>
                <Box>
                    <Button className={style.subjectBtn} onClick={funAdd}>Generate Exam</Button>
                </Box>
            </Box>
        </Container>
    </>
}
export default CreateSubjects;