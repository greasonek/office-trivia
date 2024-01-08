import Header from './Header';
import { Paper } from '@mui/material';

function About () {
  return (
    <div className='about'>
      <Header/>
      <div className='about-main'>
      <Paper className='paper'>
        <p className='about-title'>The Office Trivia</p>
        &nbsp;Welcome to the ultimate The Office trivia game! Test your knowledge and see if you are a true The Office fan.
        This game was written and created by Emily Greason and contains 30 trivia questions. Create a profile to save your high score!
      </Paper>

      </div>
    </div>
  )
}
export default About;