import React from 'react';
import './HomePage.css';
import penguin from './penguin.png';
import "@fontsource/julius-sans-one"; // Defaults to weight 400

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
        <div className='square'>
            <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida convallis quam, a tincidunt erat mollis laoreet. Morbi hendrerit 
            </div>
            <img src={penguin} alt="penguin" className='floatingImage'/>
        </div>
      </main>
    </div>
  );
}

export default HomePage;