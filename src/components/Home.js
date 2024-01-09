import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handlePlayGame = () => {
      console.log('play button clicked!')
      navigate('/game')

  }
  return (
    <>
      <Helmet><title>The Office Trivia</title></Helmet>
    <div className="app">
      <Header/>
      <div className="main">The Office Trivia</div>
      <div className='playButton'>
        <Button variant='contained' color='success' size='large' 
          onClick={(e)=>handlePlayGame()}
          sx={{
            height:80,
            width: 290,
            fontSize: 28,
            cursor: 'pointer',
            fontFamily: 'helvetica'
          }}
          >
          Let's Play!
        </Button>
      </div>
    </div>
    </>
  );
}

export default Home;