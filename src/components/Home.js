import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import Login from "./Login";

function Home(){
    let loginPage=useNavigate();
    let signUpPage=useNavigate();
    function Copyright() {
        return (
          <Typography
            variant="body2"
            align="center"
            display="flex"
            sx={{
              color: 'text.secondary',
            }}
          >
            {'Copyright © '}
            <Link color="inherit" href="https://bitcode.in/">
              BitCode
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    function funLogin(){
        loginPage("/login")
    }
    function funSignUp(){
        signUpPage("/signup")
    }
    function funCreateClasses(){
        var obj=["Class I","Class II","Class III","Class IV",
            "Class V","Class VI","Class VII","Class VIII",
            "Class IX","Class X"
        ]
        window.localStorage.setItem("class",JSON.stringify(obj));
    }
    useEffect(()=>{
        funCreateClasses();
    },[]);
    return <>
    <Container minHeight={false} className={style.appBackground}>
        <Box sx={{ my: 4 }}  className={style.appTitle}>
            <Typography variant="h5" component="h1" sx={{ mb: 5 }} >
            <label>Exam Management System</label>
            </Typography>
        {/* <ProTip /> */}  
        </Box>
        <Box>
            <Typography component="h2">
            An Exam Management System (EMS) is a software application that automates and streamlines the entire examination process, from creating and administering exams to grading and reporting results, improving efficiency and accuracy for educational institutions. 
            </Typography>
        </Box>
        <br></br>
        <div>
            <Button variant="outlined" className={style.homeBtn} onClick={funLogin}>Login</Button>
            <Button variant="outlined" className={style.homeBtn} onClick={funSignUp}>Sign Up</Button>
        </div>
        <br></br>
        <Box className={style.wrap}> 
        <span><Copyright/></span>
        </Box>
    </Container>
    </>
}
export default Home;