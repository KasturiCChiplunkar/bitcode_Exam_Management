import { Alert, AlertTitle, Box, Button, Container, Radio, TextField, Typography } from "@mui/material";
import style from "./style.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    let txtUserName=useRef();
    let txtPassword=useRef();
    let [msg,setMsg]=useState("");
    let [flag,setFlag]=useState();
    let navigate=useNavigate();
    let [selectedRole,setSelectedRole]=useState('Student');
    let [loggedInUser,setLoggedInUser]=useState([]);
    const handleRoleChange = (event)=>{
        setSelectedRole(event.target.value);
    };
    
    function funLogin(){
        console.log(txtPassword.current)
        var userName=txtUserName.current.value;
        var password=txtPassword.current.value;
        var data=window.localStorage.getItem("student");
        var studArr=JSON.parse(data);
        
        for(let i=0;i<studArr.length;i++){
            console.log(studArr[i].userName==userName 
                && studArr[i].password==password
                && studArr[i].role==selectedRole);
            if(studArr[i].userName===userName 
                && studArr[i].password===password
                && studArr[i].role==selectedRole){
                setMsg("Login Successful")
                setFlag(true);
                setLoggedInUser(studArr[i]);
                break;
            }
            else{
                setMsg("Login Unsuccessful")
                setFlag(false)
            }
        }
        console.log(msg)
    }
    
    return <>
        <Container className={style.appBackground}>
            <Box>
                <Typography variant="h5">
                    EMS - Login
                </Typography>
            </Box>
            <br></br>
            <Box className={style.loginBoxBorder} component="form">
                <br/>
                <Box className={style.boxPadding}>
                    <label>User Name:</label>
                    <input class="MuiInputBase-input MuiOutlinedInput-input" type="text" 
                        required variant="standard" ref={txtUserName}></input>
                </Box>
                <Box className={style.boxPadding}>
                    <label>Passward:</label>
                    <input type="password" class="MuiInputBase-input MuiOutlinedInput-input" 
                    required variant="standard" ref={txtPassword}></input>
                </Box>
                <Box>
                    <label>Role :</label><br/>
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
                <Box>
                    <Button variant="outlined" className={style.loginBtn} onClick={funLogin}>Login</Button>
                </Box>
            </Box><br/><br/>
            {
                flag && navigate("/studenthome",{state:loggedInUser})
            }
            {
                flag===false && <Alert variant="outlined" severity="error">
                <AlertTitle>Error</AlertTitle>
                Invalid User.! Please login again.
            </Alert>
            }
        </Container>
    </>
}
export default Login;