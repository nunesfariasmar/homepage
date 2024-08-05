import React from 'react';
import './HomePage.css';
import penguin from './penguin.png';
import "@fontsource/julius-sans-one"; // Defaults to weight 400
import Box from '@mui/joy/Box';

const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        {/* <h1>My Simple React Home Page</h1> */}
        <a href="/here">About</a>
        <a href="/here">Projects</a>
        <a href="/here">Contact</a>
      </header>
      
      <main className='main'>
        <Box container
        height={500}
        width={950}
        display="flex"
        alignItems='center'
        my={10}
        gap={4}
        p={2}
        sx={{border:'3px solid rgba(218, 218, 218)', borderRadius: 5}}
        position={'relative'}
        >
            <Box             
            alignItems='center'
            sx={{position: 'absolute', height: 490, width: 950, overflow: 'auto'}}>
                <h1 className='h1'>Mariana 
                <br/>Farias</h1>
                <Box
                sx={{width: 850}}>
                    Hello! I'm Mariana, a passionate level 27 Backend Developer. With a background in video game developer, I thrive on bringing creative ideas to life and solving complex problems. Explore my work, learn about my journey, and let's connect to create something amazing together.
                </Box>
            </Box>
            <Box 
            sx={{position: 'absolute', right: -350}}
            >
            <img src={penguin} alt="penguin" className='floatingImage'/>
            </Box>   
        </Box>
      </main>
    </div>
  );
}

export default HomePage;