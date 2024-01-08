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
    <div className="app">
      <Header/>
      <div className="main">The Office Trivia</div>
      <div className='playButton'>
        <Button variant='contained' color='success' onClick={(e)=>handlePlayGame()}>
          Let's Play!
        </Button>
      </div>
    </div>
    </>
  );
}

export default Home;