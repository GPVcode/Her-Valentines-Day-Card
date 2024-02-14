import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Button, Typography, Box, Paper } from '@mui/material';
import './App.css'; // Ensure App.css is imported
import pinkRose from './pink-rose.webp';

function App() {
  const [celebrate, setCelebrate] = useState(false);
  const [noButtonSize, setNoButtonSize] = useState(100);
  const [yesButtonSize, setYesButtonSize] = useState(100);
  const [messageIndex, setMessageIndex] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const messages = [
    "Christine, are you sure?",
    "Please don't leave, Christine...",
    "But Christine, we could have so much fun!",
    "Christine, not even for a piece of cake?",
    "Oh, come on, Christine! Just say yes!",
    "Roses are red, violets are blue, saying yes will make your day too, Christine!",
    "Is it me? It's me, isn't it, Christine? 😢",
    "I promise I'm more fun than I look, Christine!",
    "Last chance, yes, Christine?",
    "Alright, Christine, but you're missing out!"
  ];

  const handleNoClick = () => {
    if (!yesClicked) {
      if (noButtonSize > 10) {
        setNoButtonSize(noButtonSize - 10);
        setYesButtonSize(yesButtonSize + 10);
      }
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length); // Cycle through messages
    }
  };

  const handleYesClick = () => {
    if (!yesClicked) {
      setCelebrate(true);
      setYesClicked(true);
    }
  };

  return (
    <Box className="App" sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#ffebee' }}>
      <Paper elevation={3} sx={{ maxWidth: 600, width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Lato, sans-serif', backgroundColor: '#ffffff', m: 2, borderRadius: '15px' }}>
        <Box component="img" src={pinkRose} alt="Valentine's Card" sx={{ width: '80%', height: 'auto', mt: 8 }} />
        <Box sx={{ p: 3, textAlign: 'center', width: '100%' }}>
          <Typography variant="h5" gutterBottom className="romantic-text" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, mb: 4, mt: 2 }}>
            Christine, will you be my Valentine?
          </Typography>
          {messageIndex > 0 && !yesClicked && (
            <Typography sx={{ mb: 2, color: '#F44336', minHeight: '24px' }}>
              {messages[messageIndex]}
            </Typography>
          )}
          {yesClicked && (
            <Typography sx={{ mb: 2, color: '#4CAF50', minHeight: '24px' }}>
              Hooray! Christine said Yes! 🎉
            </Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4CAF50',
                '&:hover': { backgroundColor: '#388E3C' },
                padding: '10px 20px',
                fontSize: '1rem',
                transform: `scale(${yesButtonSize / 100})`,
              }}
              onClick={handleYesClick}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#F44336',
                color: '#F44336',
                '&:hover': { backgroundColor: '#FFCDD2' },
                padding: '10px 20px',
                fontSize: '1rem',
                transform: `scale(${noButtonSize / 100})`,
              }}
              onClick={handleNoClick}
            >
              No
            </Button>
          </Box>
        </Box>
        {celebrate && <Confetti />}
      </Paper>
    </Box>
  );
}

export default App;
