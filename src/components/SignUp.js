import { Alert, AlertTitle, Box, Button, Container, Input, MenuItem, Radio, Select, TextField, Typography } from "@mui/material";
import style from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducer/reducer";

function SignUp(){
    let txtFirstName=useRef();
    let txtLastName=useRef();
    let txtUserName=useRef();
    let txtPassword=useRef();
    let txtPhone=useRef();
    let txtEmail=useRef();
    let txtDOB=useRef();
    let [studentClass,setClass]=useState([]);
    let [txtStudentClass,setTxtClass]=useState('');
    let [studentFlag,setStudFlag]=useState(false);
    let [selectedValue, setSelectedValue]=useState('Male');
    let [selectedRole,setSelectedRole]=useState('Student');
    let userDispatch=useDispatch();
    let userArr = useSelector((state)=>state.user.user);

    if(localStorage.getItem("student")){
        var studArr = JSON.parse(localStorage.getItem("student"));
    }
    else{
        var studArr = new Array();
    }
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleRoleChange = (event)=>{
        setSelectedRole(event.target.value);
    };
    function funSignUp(){
        console.log(selectedValue, selectedRole)
        var fistName=txtFirstName.current.value;
        var lastName=txtLastName.current.value;
        var userName=txtUserName.current.value;
        var password=txtPassword.current.value;
        var phoneNo=txtPhone.current.value;
        var email=txtEmail.current.value;
        var dob=txtDOB.current.value;
        var selectedClass=txtStudentClass;
        var obj={
            fistName:fistName,
            lastName:lastName,
            userName:userName,
            password:password,
            phoneNo:phoneNo,
            email:email,
            dob:dob,
            class:selectedClass,
            gender:selectedValue,
            role:selectedRole
        }
        studArr.push(obj)
        //console.log(studArr)
        userDispatch(addUser(obj));
        window.localStorage.setItem("student",JSON.stringify(userArr));
        
        setStudFlag(true);
        txtFirstName.current.value="";
        txtLastName.current.value="";
        txtUserName.current.value="";
        txtPassword.current.value="";
        txtPhone.current.value="";
        txtEmail.current.value="";
        txtDOB.current.value="";
        setTxtClass("");
        setSelectedValue('Male');
        setSelectedRole('Student');
    }
    function handleClassChange(event){
        //console.log(event.target.value,event.target.textContent)
        setTxtClass(event.target.value)
    }
    function funGetClass(){
        var data=window.localStorage.getItem("class");
        setClass(JSON.parse(data));
    }
    useEffect(()=>{
        funGetClass();
    },[]);
    return <>
        <Container className={style.appBackground}>
            <Box>
                <Typography variant="h5" component="h1">
                    EMS - Sign Up Form
                </Typography>
            </Box>
            <Box className={style.signUpBoxGrid} component="form">
               <Box className={style.boxPadding}>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>First Name: </label>
                        <input class="MuiInputBase-input MuiOutlinedInput-input"
                            type="text"
                            ref={txtFirstName}
                            className={style.textField}/>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>User Name: </label>
                        <input class="MuiInputBase-input MuiOutlinedInput-input"
                            type="text"
                            ref={txtUserName}
                            className={style.textField}/>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Phone No.: </label>
                        <input class="MuiInputBase-input MuiOutlinedInput-input"
                            type="text"
                            ref={txtPhone}
                            className={style.textField}/>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Date of Birth:</label> 
                        <input class="MuiInputBase-input MuiOutlinedInput-input"
                            type="date"
                            ref={txtDOB}
                            className={style.textField}/>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Gender:</label> 
                        <span className={style.signUpLabel}>Male</span>
                        <Radio
                            checked={selectedValue === 'Male'}
                            onChange={handleChange}
                            value="Male"
                            name="radio-buttons"/>
                        <label className={style.signUpLabel}>Female</label>
                        <Radio
                            checked={selectedValue === 'Female'}
                            onChange={handleChange}
                            value="Female"
                            name="radio-buttons"/>
                    </Box>
               </Box>
               <Box className={style.boxPadding}>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Last Name: </label>
                        <input class="MuiInputBase-input MuiOutlinedInput-input"
                            type="text"
                            ref={txtLastName}
                            className={style.textField}/>
                            <span></span>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Password:</label> 
                        <input class="MuiInputBase-input MuiOutlinedInput-input"
                            type="password"
                            ref={txtPassword}
                            className={style.textField}/>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Email Id:</label> 
                        <input class="MuiInputBase-input MuiOutlinedInput-input"
                            type="text"
                            ref={txtEmail}
                            className={style.textField}/>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Role:</label>
                        <label className={style.signUpLabel}>Student</label>
                        <Radio
                            checked={selectedRole === 'Student'}
                            onChange={handleRoleChange}
                            value="Student"
                            name="radio-buttons"/>
                        <label className={style.signUpLabel}>Teacher</label>
                        <Radio
                            checked={selectedRole === 'Teacher'}
                            onChange={handleRoleChange}
                            value="Teacher"
                            name="radio-buttons"/>
                    </Box>
                    <Box className={style.boxPadding}>
                        <label className={style.signUpLabel}>Class:</label> 
                        <Select 
                            variant="standard"
                            className={style.signUpSelect}
                            value={txtStudentClass}
                            label="Class"  onChange={(event)=>{
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
               </Box>
            </Box>
            <br></br><br/>
            <Button variant="outlined" className={style.signUp} onClick={funSignUp}>Sign Up</Button>
            <br></br><br></br>
            <Box>
                {
                    studentFlag &&
                    <Alert variant="outlined" severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Student has been added successfully.!
                    </Alert>
                }
            </Box>
        </Container>
    </>
}
export default SignUp;