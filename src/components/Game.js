import React, { useState, useRef } from 'react';
import Header from './Header';
import '../components/Game.css';
import '../App.css';
import { Button, Card, Typography } from '@mui/material';
import {data} from '../assets/data';

function Game () {

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null)
  let Option3 = useRef(null)
  let Option4 = useRef(null)

  let option_arr = [Option1,Option2,Option3,Option4];

  const checkAnswer = (e, answer) => {
    if (lock === false) {
    if(question.answer===answer){
      e.target.classList.add('correct');
      setLock(true);
      setScore(prev => prev+1)
    } else {
      e.target.classList.add('wrong');
      setLock(true);
      option_arr[question.answer-1].current.classList.add('correct');
    }
  }
}

const next = () => {
  if(lock===true) {
    if (index === data.length -1) {
      setResult(true);
      return 0;
    }
    setIndex(++index);
    setQuestion(data[index]);
    setLock(false);
    option_arr.map((option) => {
      option.current.classList.remove('wrong');
      option.current.classList.remove('correct');
      return null;
    })

  }
}

const reset = () => {
  setIndex(0);
  setQuestion(data[0]);
  setScore(0);
  setLock(false);
  setResult(false);
}

  return (
    <div className='game'>
      <Header/>
      <Card className='question'>
        <Typography variant='h4'>The Office Trivia</Typography>

          {result?<></> :
          <>
        <Typography variant='h5'>
          {index+1}. {question.question}
          <hr/>
          <div className='choices'>
            <Typography variant='body1'>
              <ul>
                <li ref={Option1} onClick={(e)=>{checkAnswer(e, 1)}}>{question.option1}</li>
                <li ref={Option2} onClick={(e)=>{checkAnswer(e, 2)}}>{question.option2}</li>
                <li ref={Option3} onClick={(e)=>{checkAnswer(e, 3)}}>{question.option3}</li>
                <li ref={Option4} onClick={(e)=>{checkAnswer(e, 4)}}>{question.option4}</li>
              </ul>
            </Typography>
          </div>
        </Typography>

        <Button variant='contained' size='large' color='primary' onClick={next}
          sx={{
            height: 60, 
            width:150, 
            alignSelf: 'center', 
            margin: 2, 
            cursor:'pointer'}}>Next</Button>
        <div className='index'>{index+1} of {data.length} questions</div>
            </>
            }
            {result? <>
            
              <Typography>You scored {score} out of {data.length}</Typography>
              <Button variant='contained' onClick={reset}
              sx={{
                height: 60, 
                width:150, 
                alignSelf: 'center', 
                margin: 2, 
                cursor:'pointer'}}>Play Again!</Button>
            </>: <></>}
      </Card>
    </div>
  )
}
export default Game;