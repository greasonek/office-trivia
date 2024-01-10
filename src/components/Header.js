import React from "react";
import { Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

function Header () {
  const navigate = useNavigate()
  const handleLogIn = () => {
    navigate('/login');
  } 
  
  return (
    <div className="nav">
      <ul>
          <Button variant='text' ><a href='/' className="home">Home</a></Button>
          <Button><a href='/info' className="home">About</a></Button>
          <Button><a href='/rules' className="rules">Rules</a></Button>
      </ul>
      <div className="login">
        <ul>
          <Button onClick={handleLogIn}><PersonIcon sx={{ color: "darkblue"}} >login</PersonIcon></Button>
        </ul>
      </div>
    </div>
  )
}
export default Header;