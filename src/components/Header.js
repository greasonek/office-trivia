import React from "react";
import { Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

function Header () {
  const navigate = useNavigate()
  const handleLogIn = () => {
    navigate('/login');
  } 
  const handleAbout = () => {
    navigate('./about');
  }
  // const handleHome = () => {
  //   navigate('./home');
  // }
  
  return (
    <div className="nav">
      <ul>
          {/* <Button sx={{
                textDecoration: 'none', 
                color: 'black', 
                fontFamily: 'Helvetica', 
                fontSize: 23, 
                marginTop:1.5}} 
                onClick={handleHome}>Home</Button> */}
          <Button variant='text' ><a href='/' className="home">Home</a></Button>
          {/* <Button><a href='/about' className="home">About</a></Button> */}
          <Button 
          sx={{
            textDecoration: 'none', 
            color: 'black', 
            fontSize: 22, 
            marginTop:1.2,
          }} 
            onClick={handleAbout}>About</Button>
      </ul>
      <div className="login">
        <ul>
          <Button onClick={handleLogIn}>
            <PersonIcon sx={{ color: "darkblue"}} >login</PersonIcon>
          </Button>
        </ul>
      </div>
    </div>
  )
}
export default Header;