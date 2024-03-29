import React from 'react';
import Header from './Header';
import { Paper } from '@mui/material';

function About () {
  return (
    <div className='about'>
      <Header/>
      <div className='about-main'>
      <Paper className='paper'>
        <p className='about-title'>The Office Trivia</p>
        <p className='about-body'>
        &nbsp;Welcome to the ultimate The Office trivia game! Test your knowledge and see if you are a true The Office fan.
        This game was written and created by Emily Greason and contains 20 trivia questions.
        </p>
      </Paper>

      </div>
    </div>
  )
}
export default About;