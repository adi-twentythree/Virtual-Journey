import React, { useState } from "react";
import { Navigation, Mouse } from "../assets/Icons/Icon";
import {
    FaArrowLeft,
    FaBars,
    FaVolumeMute,
    FaVolumeUp,
    FaVrCardboard,
    FaExpand,
    FaInfoCircle,
    FaTimes,
    FaCompress
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAudio } from "../components/Audio";

const OverlayControls = ({ store, isMobile, Info }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isInfoPanelVisible, setIsInfoPanelVisible] = useState(false);
    const [isNavMenuVisible, setIsNavMenuVisible] = useState(false); // New state for Nav Menu
    const [isPopUpVisible, setIsPopUpVisible] = useState(true);

    const { isMuted, toggleMute, handleUserInteraction } = useAudio();

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const toggleInfoPanel = () => {
        setIsInfoPanelVisible((prevState) => !prevState);
    };

    const toggleNavMenu = () => {
        setIsNavMenuVisible((prevState) => !prevState);
    };

    const handleScreenClick = () => {
        setIsPopUpVisible(false);
        handleUserInteraction();
    };

    return (
        <div className="absolute z-30 top-0 left-0 w-full h-full pointer-events-none" onClick={handleScreenClick}>
            {/* Top Left - Back Button */}
            <Link
                to="/portfolio"
                className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md pointer-events-auto"
                aria-label="Back to Portfolio"
            >
                <FaArrowLeft />
            </Link>

            {/* Top Right - Nav Bar Button */}
            <button
                onClick={toggleNavMenu} // Toggle nav menu on click
                className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md pointer-events-auto"
                aria-label="Menu"
            >
                <FaBars />
            </button>

            {/* Bottom Left - Mute Button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md pointer-events-auto"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            {/* ESC Key Tooltip */}
            {!isMobile && (
                <div className="absolute px-2 py-2 bottom-28 right-6 flex items-center space-x-1 p-1 rounded-full bg-white/90 shadow-md text-xs">
                    <p className="px-2 py-0.5 rounded-full bg-orange-500 text-white font-medium">ESC</p>
                    <p className="text-gray-800 font-semibold">KEY TO RELEASE MOUSE</p>
                </div>
            )}

            {/* Bottom Right - VR, Fullscreen, Info Buttons */}
            <div className="absolute bottom-6 right-6 flex flex-row gap-10 pointer-events-auto">
                <button
                    onClick={() => store.enterVR()}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md"
                    aria-label="Enter VR"
                >
                    <FaVrCardboard />
                </button>

                {!isMobile && (
                    <>
                        <button
                            onClick={toggleFullscreen}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md"
                            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                        >
                            {isFullscreen ? <FaCompress /> : <FaExpand />}
                        </button>
                    </>
                )}

                <button
                    onClick={toggleInfoPanel}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md"
                    aria-label="Toggle Info Panel"
                >
                    <FaInfoCircle />
                </button>
            </div>

            {/* Info Panel */}
            {isInfoPanelVisible &&
                Info.map((info, index) => (
                    <div
                        key={index}
                        className="z-40 absolute top-1/2 transform -translate-y-1/2 left-4 right-4 md:left-auto md:right-4 lg:right-4 lg:left-auto md:w-1/3 lg:w-1/4 bg-white/80 backdrop-blur-md text-black flex flex-col rounded-2xl shadow-lg transition-all duration-300 pointer-events-auto max-h-full"
                    >
                        {/* Close Button */}
                        <button
                            onClick={toggleInfoPanel}
                            className="absolute top-4 left-4 text-black text-2xl opacity-90 hover:opacity-100 transition-opacity pointer-events-auto bg-white rounded-full p-2"
                            aria-label="Close Info Panel"
                        >
                            <FaTimes />
                        </button>

                        {/* Full-width Image */}
                        <div className="w-full rounded-t-2xl overflow-hidden mb-4">
                            <img src={info.imgSrc} alt={info.title} className="w-full h-auto object-cover" />
                        </div>

                        {/* Text Content */}
                        <div className="p-4">
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-tight mb-4">
                                {info.title}
                            </h2>
                            <p className="text-sm md:text-lg">{info.description}</p>
                        </div>
                    </div>
                ))}

            {/* Nav Menu (Styled like Info Panel) */}
            {isNavMenuVisible && (
                <div className="z-40 absolute top-5 transform left-4 right-4 md:left-auto md:right-4 lg:right-4 lg:left-auto md:w-1/4 lg:w-1/6 bg-white/80 backdrop-blur-md text-black flex flex-col rounded-2xl shadow-2xl transition-all duration-300 pointer-events-auto max-h-full">
                    {/* Close Button */}
                    <button
                        onClick={toggleNavMenu}
                        className="absolute right-0 text-black text-2xl opacity-90 hover:opacity-100 transition-opacity pointer-events-auto rounded-full p-2 "
                        aria-label="Close Nav Menu"
                    >
                        <FaTimes />
                    </button>

                    {/* Menu Content */}
                    <div className="p-8 space-y-8  ">

                        <ul className="space-y-6 ">
                            {[
                                { label: "Home", to: "/" },
                                { label: "About", to: "/about" },
                                { label: "Projects", to: "/portfolio" },
                                { label: "Contact", to: "/contact" },
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.to}
                                        className="block w-full py-3 px-6 rounded-xl text-lg font-semibold text-gray-700 transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}


            {/* Pop-up Message */}
            {isPopUpVisible && !isMobile && (
                <div className="z-50 absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-auto">
                    <div className="lg:w-1/4 md:w-1/2 bg-white rounded-lg p-8 shadow-lg flex flex-col gap-6">

                        <div className="text-center text-lg mt-8">
                            <h4 className="text-xl font-semibold text-orange-400">Navigation Guide for the Tour</h4>
                        </div>
                        
                        <div className="flex gap-12">
                            {/* Keyboard Movement Section */}
                            <div className="flex flex-col items-center justify-center">
                                <img src={Navigation} alt="Keyboard Controls" className="w-32 h-32 mb-4" />
                                <p className="text-sm text-center">
                                    Use <strong>W, A, S, D</strong> keys to navigate the 360-degree tour
                                </p>
                            </div>

                            {/* Mouse Movement Section */}
                            <div className="flex flex-col items-center justify-center">
                                <img src={Mouse} alt="Mouse Controls" className="w-32 h-32 mb-4" />
                                <p className="text-sm text-center">Move the mouse to change the viewing direction.</p>
                            </div>
                        </div>

                        {/* Click to Start Text */}
                        <div className="text-center text-lg mt-8">
                            <p className="text-lg text-orange-400">Click anywhere on the screen to start</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OverlayControls;
