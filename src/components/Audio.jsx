import { useState, useEffect, useRef } from 'react';
import { BgMusic } from '../assets/Audio/BgSound';

// Custom hook to manage audio playback, mute state, and volume fade in/out
export const useAudio = () => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(new Audio(BgMusic));
    const audio = audioRef.current;
    const [hasInteracted, setHasInteracted] = useState(false); // State to track user interaction

    useEffect(() => {
        audio.loop = true; // Loop the audio

        const handlePlay = () => {
            if (!isMuted && hasInteracted) {
                audio.play(); // Play audio when not muted and after interaction
            }
        };

        // Wait for user interaction to play the audio
        if (hasInteracted) {
            handlePlay();
        }

        let fadeInterval;

        // Adjust volume gradually when mute state changes
        if (!isMuted) {
            audio.volume = 0;
            fadeInterval = setInterval(() => {
                if (audio.volume < 0.2) { // Set max volume to 0.2 (20%)
                    audio.volume = Math.min(audio.volume + 0.01, 0.02); // Gradually increase volume up to 0.2
                } else {
                    clearInterval(fadeInterval); // Stop when volume reaches 0.2
                }
            }, 50); // Volume increase interval
        } else {
            fadeInterval = setInterval(() => {
                if (audio.volume > 0) {
                    audio.volume = Math.max(audio.volume - 0.01, 0); // Gradually decrease volume, ensure it doesn't go below 0
                } else {
                    audio.pause(); // Pause when volume is 0
                    clearInterval(fadeInterval); // Stop when volume reaches 0
                }
            }, 50); // Volume decrease interval
        }

        // Cleanup on component unmount
        return () => {
            clearInterval(fadeInterval);
            audio.pause();
        };
    }, [isMuted, audio, hasInteracted]); // Adding `hasInteracted` as a dependency

    // Function to toggle mute state
    const toggleMute = () => {
        setIsMuted(prevState => !prevState);
    };

    // Function to handle user interaction (e.g., click anywhere to start audio)
    const handleUserInteraction = () => {
        if (!hasInteracted) {
            setHasInteracted(true); // Allow audio to play after interaction
        }
    };

    return { isMuted, toggleMute, handleUserInteraction };
};
