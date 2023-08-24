import React from "react";
import '../styles/buybody.css';
import knight1 from '../assets/knight1.png';
import knight2 from '../assets/knight2.png';
import knight3 from '../assets/knight3.png';
import knight4 from '../assets/knight4.png';
import { useNavigate } from "react-router-dom";
import '../styles/nftbody.css';

const Buybody = () => {
    const navigate = useNavigate();
    return (
        <div className="buybody">

<div className="navbar">
                <div className="navbar_left">
                    <p style={{color: 'white'}} onClick={() => navigate('/')}className="navbar_text">HOME</p>
                    <p style={{color: 'white'}} onClick={() => navigate('/nftbody')} className="navbar_text">ABOUT</p>
                    <p style={{color: 'white'}} onClick={() => navigate('/buybody')} className="navbar_text">BUY</p>
                </div>
                <div className="navbar_right">
                    <button className="navbar_connect_wallet">CONNECT WALLET</button>
                </div>
            </div>

            <div className="buybodyelements">
                <p className="buybodytext">THAINLAO</p>
                <div className="buybodystick"></div>
                <div className="textt">
                <p className="buybodytext">CYBER</p>
                <p className="buybodytext">KNIGHTS</p>
                </div>
            </div>

            <div className="buybodyimgsection">
                    <div className="images">
                        <img className="bigimg" src={knight1}/>
                        <div className="buybody_smallimges">
                            <img className="buyimg" src={knight2}/>
                            <img className="buyimg" src={knight3}/>
                            <img className="buyimg" src={knight4}/>
                        </div>
                    </div>

                <div className="rightbuy_section">
                    <p className="bigtext glow">CYBERKNIGHTS ARE COMING TO RONIN</p>
                    <p className="common_text">CYBERKNIGHTS will be the first non-Axie IP setting foot on Ronin.</p>
                    <p className="common_text">4,000 CYBERKNIGHTS will be available on Ronin at a cost of 0.25 ETH or the equivalent in RON.</p>
                    <p className="bigtext glow">Want to stand out?</p>
                    <p className="common_text">Discover the collection in a new way by minting traits that are exclusive to either Ronin or Ethereum.</p>
                    <p className="common_text">The entire CYBERKNIGHTS collection will be able to bridge back and forth between Ronin and Ethereum once the bridge is complete.</p>
                    <p className="common_text">Together with Sky Mavis we will be bringing new gamified experiences to Mavis Hub including a full transition of existing experiences currently available on Polygon.</p>
                </div>
            </div>
        </div>
    )
}

export default Buybody;