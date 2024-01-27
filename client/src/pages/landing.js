/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/TREK AI LOGO.svg'
import img1 from '../images/Hills_and_mountains_in_autumn_(Unsplash).jpg'
import '../styles/landing.css'
function Landing() {
     // Catchphrase typing effect states
     const [catchphrase, setCatchphrase] = useState('');
     const [isDeletingCatchphrase, setIsDeletingCatchphrase] = useState(false);
     const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
     const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
     const phrases = ['tailored.', 'travelled.', 'completed.']; // Phrases for the catchphrase
 
     // Typing effect for the long paragraph
     const [displayedText, setDisplayedText] = useState('');
     const typingDemoRef = useRef(null);
     const fullText = `Upon arriving in Tokyo, you'll travel to Nagano City by Shinkansen to start your trip. The first few days are dedicated to exploring Togakushi and its enchanting shrine, followed by a hike up Mt. Norikura for its stunning views. You'll return to Nagano City for a rest day, enjoying local hot springs and cuisine. The second week begins with a journey to the Kamikochi Valley, where you'll be captivated by the serene beauty of the Azusa River. This is followed by the challenge of ascending Shirouma Dake, rewarding you with spectacular scenery. Afterwards, you'll travel to southern Nagano for a more relaxed exploration of local attractions and flavors. Your final hiking experience is at Senjojiki Cirque in Komagane, known for its unique landscapes. The trip concludes with a day of leisure hiking or revisiting a favorite spot, and a final night in a traditional ryokan. You'll then return to Tokyo before departing home, having experienced the natural and cultural wonders of Nagano within your budget and tailored to the warm August weather.`;
     const charIndex = useRef(0); // useRef to persist the current character index
 
     const typeCharacter = () => {
        // Check if the current index is within the bounds of fullText
        if (charIndex.current < fullText.length) {
            setDisplayedText(fullText.substring(0, charIndex.current + 1));
            charIndex.current++;
            setTimeout(typeCharacter, 30); // Adjust typing speed as needed
        }
    };
 
     useEffect(() => {
         const observer = new IntersectionObserver(entries => {
             entries.forEach(entry => {
                 if (entry.isIntersecting && charIndex.current === 0) {
                     typeCharacter();
                 }
             });
         }, { threshold: 0.1 });
 
         const typingDemo = typingDemoRef.current;
         observer.observe(typingDemo);
 
         return () => observer.unobserve(typingDemo);
     }, []);
 
     // Separate useEffect for the catchphrase typing effect
     useEffect(() => {
         if (currentPhraseIndex === phrases.length - 1 &&
             currentLetterIndex === phrases[currentPhraseIndex].length &&
             !isDeletingCatchphrase) {
             return; // Stop the typing effect
         }
 
         let typingSpeed = isDeletingCatchphrase ? 100 : 200;
         if (currentLetterIndex === phrases[currentPhraseIndex].length) {
             setIsDeletingCatchphrase(true);
             typingSpeed = 2000; // Pause at the end of word
         } else if (isDeletingCatchphrase && currentLetterIndex === 0) {
             setIsDeletingCatchphrase(false);
             setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
         }
 
         const timer = setTimeout(() => {
             const newIndex = isDeletingCatchphrase ? currentLetterIndex - 1 : currentLetterIndex + 1;
             setCurrentLetterIndex(newIndex);
             setCatchphrase(phrases[currentPhraseIndex].slice(0, newIndex));
         }, typingSpeed);
 
         return () => clearTimeout(timer);
     }, [currentLetterIndex, currentPhraseIndex, isDeletingCatchphrase, phrases]);
    return (
        <body>
            <div className="landing-top-container">
                <img src={logo} alt="TREKAI LOGO" width="250" height="auto" />
            </div>
            <div className="catchphrase"> Your trail, {catchphrase}</div>
            <div className="img1-container">
                <img src={img1} alt="" />
                <div className="overlay-text">Embark on unforgettable journeys with TrekAI: your personal guide to the world's most breathtaking trails, customized to fit your budget and hiking dreams. Where your next adventure awaits, tailored just for you.</div>
                <div className="button-container">
                    <button className="button-style">Log in</button>
                    <button className="button-style">Sign up</button>
                </div>
            </div>
            <div className="subtitles"> Plan your trip in seconds with AI</div>
            <div className="output-wrapper">
                <div className="inputs-wrapper">
                    <div className="input-container">
                        <span className="input-description">Destination:</span>
                        <div className="fake-input">Nagano, Japan</div>
                    </div>
                    <div className="input-container">
                        <span className="input-description">Budget (USD):</span>
                        <div className="fake-input">$3000</div>
                    </div>
                    <div className="input-container">
                        <span className="input-description">Duration (days):</span>
                        <div className="fake-input">21</div>
                    </div>
                    <div className="input-container">
                        <span className="input-description">Month:</span>
                        <div className="fake-input">August</div>
                    </div>
                    <button className="go-button">Go</button>
                </div>
                <div className="wrapper">
                    <div className="typing-demo" ref={typingDemoRef}>
                        {displayedText}
                    </div>
                </div>
            </div>
            <div className="subtitles">Interact with Your Itinerary</div>
        </body>
    );
}
export default Landing;
