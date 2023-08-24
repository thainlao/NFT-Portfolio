import React, { useState, useEffect, useRef } from "react";
import '../styles/nftbody.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";
import knight1 from '../assets/knight1.png';
import knight2 from '../assets/knight2.png';
import knight3 from '../assets/knight3.png';
import knight4 from '../assets/knight4.png';

const Nftbody = () => {
    const navigate = useNavigate();
    const knightImages = [knight1, knight2, knight3, knight4];
    const [currentKnightIndex, setCurrentKnightIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKnightIndex((prevIndex) => (prevIndex + 1) % knightImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    return (
        <Parallax className="nftbody" pages={3}>
        <ParallaxLayer offset={0} factor={1} speed={0.07}>
            <div className="navbar">
                <div className="navbar_left">
                    <p onClick={() => navigate('/')}className="navbar_text">HOME</p>
                    <p onClick={() => navigate('/nftbody')} className="navbar_text">ABOUT</p>
                    <p onClick={() => navigate('/buybody')} className="navbar_text">BUY</p>
                </div>
                <div className="navbar_right">
                    <button className="navbar_connect_wallet">CONNECT WALLET</button>
                </div>
            </div>
            <div className="nftlayer1">
                <h2 className="nft-text glow">THAINLAO</h2>
                <h2 className="nft-text glow">PORTFOLIO</h2>
            </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.05} factor={1} offset={1}>
            <div className="nftlayer2">
                <div className="layer2">
                    <p className="layer2text">MINT SCHEDULE</p>
                    <div className="layer2_scheme">
                        <div className="layer2_scheme_left">
                            <p className="text_scheme">1 SEPT - 4-7PM UST</p>
                            <p>LIMILIST</p>
                            <p style={{marginTop: '20px'}}>The Limitlist sale is only for Limitlisted individuals. Every Limitlist has the guaranteed option to mint two Genkai.</p>
                        </div>
                        <div className="layer2_scheme_right">
                            <p className="text_scheme">PRICE: 0.25 ETH</p>
                        </div>
                    </div>

                    <div className="layer2_scheme">
                        <div className="layer2_scheme_left">
                            <p className="text_scheme">1 SEPT - 7-9PM UTC</p>
                            <p>Ronin Public Sale</p>
                            <p style={{marginTop: '20px'}}>This Ronin Sale will take place at the same time as the Ethereum Limitlist sale. The sale is open to the public. The Ronin mint is limited to one mint per transaction. Each wallet is allowed multiple transactions.</p>
                        </div>
                        <div className="layer2_scheme_right">
                            <p className="text_scheme">PRICE: 0.25 ETH</p>
                        </div>
                    </div>

                    <div className="layer2_scheme">
                        <div className="layer2_scheme_left">
                            <p className="text_scheme">2 SEPT - 4-7PM UTC</p>
                            <p>Waitlist</p>
                            <p style={{marginTop: '20px'}}>The Waitlist sale will begin immediately after the Limitlist stage only if there is supply remaining. All individuals who applied to the portal and CyberKongz holders are eligible for Waitlist. Waitlist is limited to one mint per wallet.</p>
                        </div>
                        <div className="layer2_scheme_right">
                            <p className="text_scheme">PRICE: 0.25 ETH</p>
                        </div>
                    </div>

                </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.3} factor={1} offset={2}>
            <div className="nftlayer3">
                <p style={{marginBottom: '4rem'}} className="layer3title">CyberKnights Genkai is a collection of 20,000 anime‑inspired collectibles journeying through Niakea.</p>
                <div className="nftlayer3display">
                    <div className="img_button">
                        <img className="layer3img" src={knightImages[currentKnightIndex]} alt={`Knight ${currentKnightIndex + 1}`} />
                        <button onClick={() => navigate('/buybody')} className="buybutton">buy</button>
                    </div>
                    <div className="layer3textsection">
                        <p className="layer3title">THE NEXT ITERATION</p>
                        <p className="layer3text">Step into the world of Niakea, and join CyberKnights in a new IP focused and gaming driven journey. Explore the art of Genkai, find your tribe, and collect those Emaki.</p>
                        <p className="layer3text">CyberKnights will be a utility-enabled PFP that will hold unique characteristics to the CyberKongz ecosystem. They will serve as CyberKongz flagship collection, as we continue to expand our IP in web2 and web3.</p>
                        <p className="layer3text">No boundaries; no limits.</p>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    </Parallax>
    );
}

export default Nftbody;
