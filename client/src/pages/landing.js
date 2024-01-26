import React, { useState, useEffect } from 'react';
import logo from '../images/TREK AI LOGO.svg'
import img1 from '../images/4096px-Dark_mountain_panorama.jpg'
import '../styles/landing.css'
function Landing() {
    const [word, setWord] = useState('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const phrases = ['tailored.', 'travelled.', 'completed.']; // Add more words as needed
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  
    useEffect(() => {
      // Check if the last word has been reached and is fully displayed
      if (currentPhraseIndex === phrases.length - 1 && 
          currentLetterIndex === phrases[currentPhraseIndex].length &&
          !isDeleting) {
        return; // Stop the typing effect
      }
  
      let typingSpeed = isDeleting ? 100 : 200;
      if (currentLetterIndex === phrases[currentPhraseIndex].length) {
        setIsDeleting(true);
        typingSpeed = 2000; // Pause at the end of word
      } else if (isDeleting && currentLetterIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
  
      const timer = setTimeout(() => {
        const newIndex = isDeleting ? currentLetterIndex - 1 : currentLetterIndex + 1;
        setCurrentLetterIndex(newIndex);
        setWord(phrases[currentPhraseIndex].slice(0, newIndex));
      }, typingSpeed);
  
      // Cleanup function to clear timeout
      return () => clearTimeout(timer);
    }, [currentLetterIndex, currentPhraseIndex, isDeleting, phrases]);
  

    return (
        <body>
            <div class="landing-top-container">
                <img src={logo} alt="TREKAI LOGO" width="250" height="auto"/>
            </div>
            <div class="catchphrase"> Your trail, {word}</div>
            <div class="img1-container">
                <img src={img1} alt="" width="800"/>
            </div>
        </body>
    );
}

export default Landing;
